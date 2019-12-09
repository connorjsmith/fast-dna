import React from "react";
import {
    ManagedClasses,
    StackPanelClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-base";

export interface StackPanelManagedClasses
    extends ManagedClasses<StackPanelClassNameContract> {}
export interface StackPanelUnhandledProps extends React.HTMLAttributes<HTMLDivElement> {}

export enum stackPanelOrientation {
    horizontal = "horizontal",
    vertical = "vertical",
}

export enum virtualizationMode {
    off = "off",
    lazyLoad = "lazyLoad",
    full = "full",
}

export interface StackPanelHandledProps extends StackPanelManagedClasses {
    /**
     *
     */
    virtualization?: virtualizationMode;

    /**
     *  The default height in pixels of each row
     */
    itemHeight?: number;

    /**
     * This callback function overrides the itemHeight prop and data is updated in props.  Allows for non-uniform row heights.
     */
    itemHeightCallback?: (child: React.ReactNode, rowIndex: number) => number;

    /**
     * How many items to preload before and after the range defined by viewportMaxHeight
     */
    preloadBufferLength?: number;

    /**
     * The orientation of the stackpanel
     */
    orientation?: stackPanelOrientation;

    /**
     * The children of the panel
     */
    children?: React.ReactNode;
}

export type StackPanelProps = StackPanelHandledProps & StackPanelUnhandledProps;
