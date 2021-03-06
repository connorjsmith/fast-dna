import React from "react";
import * as ShallowRenderer from "react-test-renderer/shallow";
import Adapter from "enzyme-adapter-react-16";
import { configure, mount, shallow, ShallowWrapper } from "enzyme";
import {
    keyCodeArrowDown,
    keyCodeArrowLeft,
    keyCodeArrowRight,
    keyCodeArrowUp,
    keyCodeEnd,
    keyCodeHome,
    Orientation,
} from "@microsoft/fast-web-utilities";
import { noop } from "lodash-es";
import {
    TabClassNameContract,
    TabPanelClassNameContract,
    TabsClassNameContract,
} from "@microsoft/fast-components-class-name-contracts-base";
import Tabs, {
    Tab,
    TabItem,
    TabPanel,
    TabsHandledProps,
    TabsItem,
    TabsManagedClasses,
    TabsProps,
    TabsSlot,
    TabsUnhandledProps,
} from "./index";
import { DisplayNamePrefix } from "../utilities";

export enum CustomTabsSlot {
    tab = "customTab",
    tabItem = "customTabItem",
    tabPanel = "customTabPanel",
}

/*
 * Configure Enzyme
 */
configure({ adapter: new Adapter() });

describe("tabs", (): void => {
    const tabsManagedClasses: TabsClassNameContract = {
        tabs: "tabs-class",
        tabs_tabList: "tab_list-class",
    };

    const tabPanelManagedClasses: TabPanelClassNameContract = {
        tabPanel: "tab_panel-class",
        tabPanel__hidden: "tab_panel__hidden-class",
    };

    const tabManagedClasses: TabClassNameContract = {
        tab: "tab-class",
        tab__active: "tab__active-class",
    };

    const id0: string = "tab01";
    const id1: string = "tab02";
    const id2: string = "tab03";

    const children: JSX.Element[] = [
        <TabItem key={1} slot={TabsSlot.tabItem} id={id0}>
            <Tab slot={TabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 1
            </Tab>
            <TabPanel slot={TabsSlot.tabPanel} managedClasses={tabPanelManagedClasses}>
                tab 1 content
            </TabPanel>
        </TabItem>,
        <TabItem key={2} slot={TabsSlot.tabItem} id={id1}>
            <Tab slot={TabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 2
            </Tab>
            <TabPanel slot={TabsSlot.tabPanel} managedClasses={tabPanelManagedClasses}>
                tab 2 content
            </TabPanel>
        </TabItem>,
        <TabItem key={3} slot={TabsSlot.tabItem} id={id2}>
            <Tab slot={TabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 3
            </Tab>
            <TabPanel slot={TabsSlot.tabPanel} managedClasses={tabPanelManagedClasses}>
                tab 3 content
            </TabPanel>
        </TabItem>,
    ];
    const childrenMissingIds: JSX.Element[] = [
        <TabItem key={1} slot={TabsSlot.tabItem} id={null}>
            <Tab slot={TabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 1
            </Tab>
            <TabPanel slot={TabsSlot.tabPanel} managedClasses={tabPanelManagedClasses}>
                tab 1 content
            </TabPanel>
        </TabItem>,
        <TabItem key={2} slot={TabsSlot.tabItem} id={null}>
            <Tab slot={TabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 2
            </Tab>
            <TabPanel slot={TabsSlot.tabPanel} managedClasses={tabPanelManagedClasses}>
                tab 2 content
            </TabPanel>
        </TabItem>,
    ];
    const childrenWithCustomSlots: JSX.Element[] = [
        <TabItem key={1} slot={CustomTabsSlot.tabItem} id={id0}>
            <Tab slot={CustomTabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 1
            </Tab>
            <TabPanel
                slot={CustomTabsSlot.tabPanel}
                managedClasses={tabPanelManagedClasses}
            >
                tab 1 content
            </TabPanel>
        </TabItem>,
        <TabItem key={2} slot={CustomTabsSlot.tabItem} id={id1}>
            <Tab slot={CustomTabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 2
            </Tab>
            <TabPanel
                slot={CustomTabsSlot.tabPanel}
                managedClasses={tabPanelManagedClasses}
            >
                tab 2 content
            </TabPanel>
        </TabItem>,
        <TabItem key={3} slot={CustomTabsSlot.tabItem} id={id2}>
            <Tab slot={CustomTabsSlot.tab} managedClasses={tabManagedClasses}>
                tab 3
            </Tab>
            <TabPanel
                slot={CustomTabsSlot.tabPanel}
                managedClasses={tabPanelManagedClasses}
            >
                tab 3 content
            </TabPanel>
        </TabItem>,
    ];

    test("should have correct element role attribute 'tablist'", () => {
        const rendered: ShallowWrapper = shallow(
            <Tabs managedClasses={tabsManagedClasses} label="label" />
        );
        expect(
            rendered
                .find(`.${tabsManagedClasses.tabs_tabList}`)
                .first()
                .prop("role")
        ).toBe("tablist");
    });

    test("should have a displayName that matches the component name", () => {
        expect(`${DisplayNamePrefix}${(Tabs as any).name}`).toBe(Tabs.displayName);
    });

    test("should not throw if managedClasses are not provided", () => {
        expect(() => {
            shallow(<Tabs label="label" />);
        }).not.toThrow();
    });

    test("should have the role tablist on the element containing the tab elements", () => {
        const renderedWithChildren: any = shallow(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.find('[role="tablist"]')).toHaveLength(1);
    });

    test("should have the role tab on the tab element", () => {
        const renderedWithChildren: any = mount(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.find('[role="tab"]')).toHaveLength(3);
    });

    test("should have the role tabpanel on the tab panel", () => {
        const renderedWithChildren: any = mount(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.find('[role="tabpanel"]')).toHaveLength(3);
    });

    test("should have an aria-label if the label prop is passed", () => {
        const testLabel: string = "test label";
        const renderedWithChildren: any = mount(
            <Tabs managedClasses={tabsManagedClasses} label={testLabel}>
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.find("[aria-label]").props()["aria-label"]).toBe(
            testLabel
        );
    });

    test("should have an aria-orientation if the orientation prop is passed", () => {
        const renderedWithChildren: any = mount(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {children}
            </Tabs>
        );
        const renderedWithChildrenHorizontal: any = mount(
            <Tabs
                managedClasses={tabsManagedClasses}
                label={"items"}
                orientation={Orientation.horizontal}
            >
                {children}
            </Tabs>
        );
        const renderedWithChildrenVertical: any = mount(
            <Tabs
                managedClasses={tabsManagedClasses}
                label={"items"}
                orientation={Orientation.vertical}
            >
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.find("[aria-orientation]")).toHaveLength(0);
        expect(
            renderedWithChildrenHorizontal.find("[aria-orientation]").props()[
                "aria-orientation"
            ]
        ).toBe(Orientation.horizontal);
        expect(
            renderedWithChildrenVertical.find("[aria-orientation]").props()[
                "aria-orientation"
            ]
        ).toBe(Orientation.vertical);
    });

    test("should use an id prop passed to a TabItem as aria-controls on the Tab and aria-labelledby on the TabPanel", () => {
        const renderedWithChildren: any = mount(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {children}
            </Tabs>
        );

        expect(
            renderedWithChildren.find(Tab.displayName).get(0).props["aria-controls"]
        ).toBe(id0);
        expect(
            renderedWithChildren.find(TabPanel.displayName).get(0).props[
                "aria-labelledby"
            ]
        ).toBe(id0);
        expect(
            renderedWithChildren.find(Tab.displayName).get(1).props["aria-controls"]
        ).toBe(id1);
        expect(
            renderedWithChildren.find(TabPanel.displayName).get(1).props[
                "aria-labelledby"
            ]
        ).toBe(id1);
        expect(
            renderedWithChildren.find(Tab.displayName).get(2).props["aria-controls"]
        ).toBe(id2);
        expect(
            renderedWithChildren.find(TabPanel.displayName).get(2).props[
                "aria-labelledby"
            ]
        ).toBe(id2);
    });

    test("should return an object that includes all valid props which are not enumerated as handledProps", () => {
        const handledProps: TabsHandledProps & TabsManagedClasses = {
            managedClasses: tabsManagedClasses,
            children,
            label: "items",
        };
        const unhandledProps: TabsUnhandledProps = {
            "aria-hidden": true,
        };
        const props: TabsProps = { ...handledProps, ...unhandledProps };

        const rendered: any = shallow(<Tabs {...props} />);

        expect(rendered.prop("aria-hidden")).not.toBe(undefined);
        expect(rendered.prop("aria-hidden")).toEqual(true);
    });

    test("should correctly handle children", () => {
        const renderedWithChildren: any = shallow(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.prop("children")).not.toBe(undefined);
        expect(renderedWithChildren.find(Tab.displayName).length).toEqual(3);
    });

    test("should handle non existing active id set in props by keeping previous tab active.", () => {
        const renderedWithChildren: ShallowWrapper = shallow(
            <Tabs managedClasses={tabsManagedClasses} label={"items"} activeId={id0}>
                {children}
            </Tabs>
        );

        expect(renderedWithChildren.find(Tab.displayName).length).toEqual(3);

        const tab1: any = renderedWithChildren.find(Tab.displayName).at(0);
        const tab2: any = renderedWithChildren.find(Tab.displayName).at(1);

        expect(tab1.prop("active")).toEqual(true);
        expect(tab2.prop("active")).toEqual(false);

        const handledProps: TabsHandledProps & TabsManagedClasses = {
            managedClasses: tabsManagedClasses,
            children,
            label: "items",
            activeId: "nonExistingTabId",
        };

        const props: TabsProps = { ...handledProps };
        renderedWithChildren.setProps(props);

        expect(tab1.prop("active")).toEqual(true);
        expect(tab2.prop("active")).toEqual(false);
    });

    test("should generate an ID if none has been provided", () => {
        const renderedWithChildren: any = shallow(
            <Tabs managedClasses={tabsManagedClasses} label={"items"}>
                {childrenMissingIds}
            </Tabs>
        );

        expect(renderedWithChildren.prop("children")).not.toBe(undefined);
    });

    test("should correctly handle children when given custom slots", () => {
        const renderedWithChildren: any = shallow(
            <Tabs
                managedClasses={tabsManagedClasses}
                label={"items"}
                tabSlot={"customTab"}
                tabItemSlot={"customTabItem"}
                tabPanelSlot={"customTabPanel"}
            >
                {childrenWithCustomSlots}
            </Tabs>
        );

        expect(renderedWithChildren.prop("children")).not.toBe(undefined);
    });

    test("should allow a user to control the component from a callback", () => {
        const onUpdate: any = jest.fn();
        const rendered: any = mount(
            <Tabs
                managedClasses={tabsManagedClasses}
                onUpdate={onUpdate}
                children={children}
                activeId={id0}
                label={"items"}
            />
        );

        const tab1: any = rendered.find(Tab.displayName).at(0);
        const tab2: any = rendered.find(Tab.displayName).at(1);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab2.simulate("click", {
            currentTarget: { getAttribute: (): string => id1 },
        });

        expect(onUpdate).toBeCalledWith(id1);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeArrowLeft });

        expect(onUpdate).toBeCalledWith(id2);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeArrowUp });

        expect(onUpdate).toBeCalledWith(id2);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeArrowRight });

        expect(onUpdate).toBeCalledWith(id1);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeArrowDown });

        expect(onUpdate).toBeCalledWith(id1);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeHome });

        expect(onUpdate).toBeCalledWith(id0);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeEnd });

        expect(onUpdate).toBeCalledWith(id2);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        rendered.setProps({ activeId: id1 });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);
    });

    test("should not use the callback if it is not a function", () => {
        const rendered: any = shallow(
            <Tabs
                managedClasses={tabsManagedClasses}
                onUpdate={noop}
                activeId={id0}
                label={"items"}
            >
                {children}
            </Tabs>
        );

        rendered
            .find(Tab.displayName)
            .at(0)
            .simulate("keydown", { keyCode: keyCodeEnd });
        rendered
            .find(Tab.displayName)
            .at(0)
            .simulate("keydown", { keyCode: keyCodeHome });
        rendered
            .find(Tab.displayName)
            .at(0)
            .simulate("keydown", { keyCode: keyCodeArrowLeft });
        rendered
            .find(Tab.displayName)
            .at(0)
            .simulate("keydown", { keyCode: keyCodeArrowRight });
        rendered
            .find(Tab.displayName)
            .at(0)
            .simulate("click", {
                currentTarget: { getAttribute: (): string => id1 },
            });
    });

    test("should allow an uncontrolled state where when navigation is available through click or keyboard action", () => {
        const rendered: any = mount(
            <Tabs
                managedClasses={tabsManagedClasses}
                children={children}
                label={"items"}
            />
        );

        const tab1: any = rendered.find(Tab.displayName).at(0);
        const tab2: any = rendered.find(Tab.displayName).at(1);
        const tab3: any = rendered.find(Tab.displayName).at(2);

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeArrowLeft });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(true);

        tab3.simulate("keydown", { keyCode: keyCodeArrowUp });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab2.simulate("keydown", { keyCode: keyCodeArrowLeft });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeArrowRight });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab2.simulate("keydown", { keyCode: keyCodeArrowDown });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(true);

        tab3.simulate("keydown", { keyCode: keyCodeArrowRight });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab1.simulate("keydown", { keyCode: keyCodeEnd });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(true);

        tab1.simulate("keydown", { keyCode: keyCodeHome });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);

        tab2.simulate("click", {
            currentTarget: { getAttribute: (): string => id1 },
        });

        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(0);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("tabIndex")
        ).toEqual(-1);
        expect(
            rendered
                .find(Tab.displayName)
                .at(0)
                .prop("active")
        ).toBe(false);
        expect(
            rendered
                .find(Tab.displayName)
                .at(1)
                .prop("active")
        ).toBe(true);
        expect(
            rendered
                .find(Tab.displayName)
                .at(2)
                .prop("active")
        ).toBe(false);
    });

    function renderTab(tabTitle: string, className?: string): () => React.ReactNode {
        return (): React.ReactNode => <div className={className}>{tabTitle}</div>;
    }

    function renderTabContent(
        tabContent: string,
        className?: string
    ): () => React.ReactNode {
        return (): React.ReactNode => <div className={className}>{tabContent}</div>;
    }
    const tabItem1: TabsItem = {
        tab: renderTab("tab one"),
        content: renderTabContent("tab one content"),
        id: id0,
    };

    const tabItem2: TabsItem = {
        tab: renderTab("tab two"),
        content: renderTabContent("tab two content"),
        id: id1,
    };

    const tabItem3: TabsItem = {
        tab: renderTab("tab three"),
        content: renderTabContent("tab three content"),
        id: id2,
    };
    const detailTabItemData: TabsItem[] = [tabItem1, tabItem2, tabItem3];

    test("should correctly render tabitems when given items", () => {
        const renderedWithChildren: any = shallow(
            <Tabs
                managedClasses={tabsManagedClasses}
                label={"items"}
                items={detailTabItemData}
            />
        );

        expect(renderedWithChildren.prop("children")).not.toBe(undefined);
    });

    test("should correctly set active ID", () => {
        const renderedWithChildren: any = shallow(
            <Tabs
                managedClasses={tabsManagedClasses}
                label={"items"}
                activeId={id1}
                items={detailTabItemData}
            />
        );

        expect(
            renderedWithChildren
                .find(Tab.displayName)
                .at(1)
                .prop("tabIndex")
        ).toEqual(0);
    });
});

describe("Tab", (): void => {
    test("should have a displayName that matches the component name", () => {
        expect(`${DisplayNamePrefix}${(Tab as any).name}`).toBe(Tab.displayName);
    });

    test("should not throw if managedClasses are not provided", () => {
        expect(() => {
            shallow(<Tab slot={TabsSlot.tab} />);
            shallow(<Tab slot={TabsSlot.tab} active={true} />);
        }).not.toThrow();
    });
});

describe("TabItem", (): void => {
    test("should have a displayName that matches the component name", () => {
        expect(`${DisplayNamePrefix}${(TabItem as any).name}`).toBe(TabItem.displayName);
    });
});

describe("TabPanel", (): void => {
    test("should have a displayName that matches the component name", () => {
        expect(`${DisplayNamePrefix}${(TabPanel as any).name}`).toBe(
            TabPanel.displayName
        );
    });

    test("should not throw if managedClasses are not provided", () => {
        expect(() => {
            shallow(<TabPanel slot={TabsSlot.tabPanel} />);
            shallow(<TabPanel slot={TabsSlot.tabPanel} aria-hidden={true} />);
        }).not.toThrow();
    });
});
