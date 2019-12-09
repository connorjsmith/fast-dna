import { StackPanelClassNameContract } from "@microsoft/fast-components-class-name-contracts-base";
import Foundation, { HandledProps } from "@microsoft/fast-components-foundation-react";
import { classNames, Direction } from "@microsoft/fast-web-utilities";
import { canUseDOM } from "exenv-es6";
import { isEqual, isNil, memoize } from "lodash-es";
import React from "react";
import ReactDOM from "react-dom";
import { toPx } from "@microsoft/fast-jss-utilities";
import {
    DisplayNamePrefix,
    IntersectionObserverEntry,
    ResizeObserverClassDefinition,
    ResizeObserverEntry,
} from "../utilities";
import {
    StackPanelHandledProps,
    StackPanelProps,
    StackPanelUnhandledProps,
    virtualizationMode,
    stackPanelOrientation,
} from "./stack-panel.props";

export interface StackPanelState {
    disabled: boolean;
    itemContainerHeight: number;
    renderedRangeStartIndex: number;
    renderedRangeEndIndex: number;
}

interface ItemPosition {
    increment: number;
    start: number;
    end: number;
}

class StackPanel extends Foundation<
    StackPanelHandledProps,
    StackPanelUnhandledProps,
    StackPanelState
> {
    public static displayName: string = `${DisplayNamePrefix}StackPanel`;

    public static defaultProps: Partial<StackPanelProps> = {
        managedClasses: {},
        virtualization: virtualizationMode.off,
        itemHeight: 100,
        preloadBufferLength: 1,
        orientation: stackPanelOrientation.vertical,
    };

    protected handledProps: HandledProps<StackPanelHandledProps> = {
        managedClasses: void 0,
    };

    private rootElement: React.RefObject<HTMLDivElement> = React.createRef<
        HTMLDivElement
    >();

    private itemContainerElement: React.RefObject<HTMLDivElement> = React.createRef<
        HTMLDivElement
    >();

    private openRequestAnimationFrame: number = null;

    private resizeDetector: ResizeObserverClassDefinition;

    private direction: Direction = Direction.ltr;

    private itemPositions: ItemPosition[];
    private updateItemPositions: (() => ItemPosition[]);

    /**
     * constructor
     */
    constructor(props: StackPanelProps) {
        super(props);

        this.updateItemPositions = memoize(this.getItemPositions);
        this.itemPositions = this.updateItemPositions();

        this.state = {
            disabled: false,
            itemContainerHeight: 0,
            renderedRangeStartIndex: 0,
            renderedRangeEndIndex: 0,
        };
    }

    /**
     * Renders the component
     */
    public render(): React.ReactElement<HTMLDivElement> {
        return (
            <div
                {...this.unhandledProps()}
                ref={this.rootElement}
                className={this.generateClassNames()}
            >
                <div
                    // className={classNames(stackPanel_itemContainer)}
                    ref={this.itemContainerElement}
                    style={{
                        position: "relative",
                        height: `${this.state.itemContainerHeight}px`,
                    }}
                >
                    {this.renderItems()}
                </div>
            </div>
        );
    }

    /**
     * React life-cycle method
     */
    public componentDidMount(): void {
        if (!isNil(this.rootElement.current)) {
            this.rootElement.current.addEventListener("scroll", this.handleScroll);

            if (((window as unknown) as WindowWithResizeObserver).ResizeObserver) {
                this.resizeDetector = new ((window as unknown) as WindowWithResizeObserver).ResizeObserver(
                    this.handleResize
                );
                this.resizeDetector.observe(this.rootElement.current);
            }
        }

        this.updateLayout();
    }

    /**
     * React life-cycle method
     */
    public componentDidUpdate(prevProps: StackPanelProps): void {
        if (
            !isEqual(prevProps.children, this.props.children) ||
            prevProps.itemHeight !== this.props.itemHeight
        ) {
            this.updateLayout();
        }
    }

    /**
     * React life-cycle method
     */
    public componentWillUnmount(): void {
        if (!isNil(this.rootElement.current)) {
            this.rootElement.current.removeEventListener("scroll", this.handleScroll);

            if (((window as unknown) as WindowWithResizeObserver).ResizeObserver) {
                this.resizeDetector.unobserve(this.rootElement.current);
                this.resizeDetector.disconnect();
                this.resizeDetector = null;
            }
        }
    }

    /**
     * Create class-names
     */
    protected generateClassNames(): string {
        const { stackPanel }: StackPanelClassNameContract = this.props.managedClasses;

        return super.generateClassNames(classNames(stackPanel));
    }

    /**
     *  render the items
     */
    private renderItems = (): React.ReactChild[] => {
        const childrenAsArray: React.ReactNode[] = React.Children.toArray(
            this.props.children
        );
        const childCount: number = childrenAsArray.length;
        const renderedItems: React.ReactChild[] = [];
        const endIndex: number =
            this.state.renderedRangeEndIndex > childCount - 1
                ? childCount - 1
                : this.state.renderedRangeEndIndex;
        for (let i: number = this.state.renderedRangeStartIndex; i <= endIndex; i++) {
            renderedItems.push(this.renderItem(childrenAsArray[i], i));
        }
        return renderedItems;
    };

    /**
     * Render a single data row
     */
    private renderItem = (item: React.ReactNode, index: number): React.ReactChild => {
        return (
            <div
                className=""
                style={{
                    height: toPx(this.itemPositions[index].increment),
                    position: "absolute",
                    top: toPx(this.itemPositions[index].start),
                }}
            >
                {item}
            </div>
        );
    };

    /**
     * Builds a list of positioning data for all items
     */
    private getItemPositions = (): ItemPosition[] => {
        const itemPositions: ItemPosition[] = [];
        let currentItemTop: number = 0;
        const childrenAsArray: React.ReactNode[] = React.Children.toArray(
            this.props.children
        );
        const childCount: number = childrenAsArray.length;

        for (let i: number = 0, itemCount: number = childCount; i < itemCount; i++) {
            const itemHeight: number =
                typeof this.props.itemHeightCallback === "function"
                    ? this.props.itemHeightCallback(childrenAsArray[i], i)
                    : this.props.itemHeight;
            const itemBottom: number = currentItemTop + itemHeight;
            itemPositions.push({
                increment: itemHeight,
                start: currentItemTop,
                end: itemBottom,
            });

            currentItemTop = itemBottom;
        }

        return itemPositions;
    };

    /**
     * Recalculates the layout
     */
    private updateLayout = (): void => {
        if (
            isNil(this.rootElement.current) ||
            isNil(this.itemContainerElement.current) ||
            this.props.itemHeight < 1
        ) {
            return;
        }

        const dataContainerHeight: number =
            this.itemPositions.length > 0
                ? this.itemPositions[this.itemPositions.length - 1].end
                : 0;

        const bufferInPixels: number = this.props.itemHeight * this.getBufferLength();
        let renderStartPixel: number = Math.floor(
            this.rootElement.current.scrollTop - bufferInPixels
        );

        // render as if viewport can accomodate at least two items
        const viewportHeight: number =
            this.rootElement.current.clientHeight >= this.props.itemHeight * 2
                ? this.rootElement.current.clientHeight
                : this.props.itemHeight * 2;

        let renderEndPixel: number = Math.floor(
            this.rootElement.current.scrollTop + viewportHeight + bufferInPixels
        );

        if (renderStartPixel < 0) {
            renderStartPixel = 0;
        }

        if (renderEndPixel > dataContainerHeight) {
            renderEndPixel = dataContainerHeight;
        }

        const renderStartIndex: number = this.getThresholdItemIndex(
            this.itemPositions,
            0,
            renderStartPixel
        );
        const visibleRangeStartIndex: number = this.getThresholdItemIndex(
            this.itemPositions,
            renderStartIndex,
            this.rootElement.current.scrollTop
        );
        const visibleRangeEndIndex: number = this.getThresholdItemIndex(
            this.itemPositions,
            visibleRangeStartIndex,
            this.rootElement.current.scrollTop + this.rootElement.current.clientHeight
        );
        const renderEndIndex: number = this.getThresholdItemIndex(
            this.itemPositions,
            visibleRangeEndIndex,
            renderEndPixel
        );

        // let currentFocusRowIndex: number = this.getRowIndexByKey(this.state.focusRowKey);

        // if (currentFocusRowIndex === -1) {
        //     currentFocusRowIndex = 0;
        // }

        // let newFocusRowKey: React.ReactText = this.getFocusRowKey(this.state.focusRowKey);
        // if (currentFocusRowIndex > visibleRangeEndIndex) {
        //     newFocusRowKey = this.props.gridData[visibleRangeEndIndex][
        //         this.props.dataRowKey
        //     ];
        //     this.blurCurrentFocusCell();
        // } else if (currentFocusRowIndex < visibleRangeStartIndex) {
        //     newFocusRowKey = this.props.gridData[visibleRangeStartIndex][
        //         this.props.dataRowKey
        //     ];
        //     this.blurCurrentFocusCell();
        // }

        // // If the grid was focused before the layout update then set focus to the proper cell
        // if (this.isFocused) {
        //     this.focusOnCell(newFocusRowKey, this.state.focusColumnKey);
        // }

        this.setState({
            // itemContainerHeight,
            // focusRowKey: newFocusRowKey,
            renderedRangeStartIndex: renderStartIndex,
            renderedRangeEndIndex: renderEndIndex,
            // isScrolling:
            //     this.rootElement.current.scrollHeight >
            //     this.rootElement.current.clientHeight
            //         ? true
            //         : false,
        });
    };

    /**
     * gets the first row where the row bottom exceeds the threshold value
     * returns final item index if no rows reach threshold value
     */
    private getThresholdItemIndex = (
        itemPositions: ItemPosition[],
        startIndex: number,
        threshold: number
    ): number => {
        if (itemPositions.length === 0) {
            return 0;
        }
        let thresholdIndex: number = itemPositions.length - 1;
        for (
            let i: number = startIndex, rowCount: number = itemPositions.length;
            i < rowCount;
            i++
        ) {
            const thisItemPosition: ItemPosition = itemPositions[i];
            if (thisItemPosition.end >= threshold) {
                thresholdIndex = i;
                break;
            }
        }

        return thresholdIndex;
    };

    /**
     * gets the current buffer size (number of items to render outside the viewport)
     */
    private getBufferLength = (): number => {
        if (
            !isNil(this.props.preloadBufferLength) &&
            this.props.preloadBufferLength >= 0
        ) {
            return Math.floor(this.props.preloadBufferLength);
        }

        if (!isNil(this.rootElement) && !isNil(this.rootElement.current)) {
            // one page is default
            const bufferSize: number = Math.ceil(
                this.rootElement.current.clientHeight / this.props.itemHeight
            );
            return bufferSize > 1 ? bufferSize : 1;
        }

        return 1;
    };

    /**
     *  Handle scroll events
     */
    private handleScroll = (): void => {
        this.requestFrame();
    };

    /**
     *  Handle viewport resize events
     */
    private handleResize = (entries: ResizeObserverEntry[]): void => {
        this.requestFrame();
    };

    /**
     * Request's an animation frame if there are currently no open animation frame requests
     */
    private requestFrame = (): void => {
        if (this.openRequestAnimationFrame === null) {
            this.openRequestAnimationFrame = window.requestAnimationFrame(
                this.gotAnimationFrame
            );
        }
    };

    /**
     * Got an animation frame
     */
    private gotAnimationFrame = (): void => {
        this.openRequestAnimationFrame = null;
        this.updateLayout();
    };

    /**
     *  Updates the direction
     */
    private updateDirection = (): void => {
        if (this.rootElement.current === null) {
            return;
        }

        const closest: Element = this.rootElement.current.closest(`[dir]`);

        if (closest === null) {
            this.direction = Direction.ltr;
            return;
        }

        this.direction =
            closest.getAttribute("dir").toLowerCase() === "rtl"
                ? Direction.rtl
                : Direction.ltr;
    };
}

export default StackPanel;
export * from "./stack-panel.props";
export { StackPanelClassNameContract };
