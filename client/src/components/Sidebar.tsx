import React, { useState } from "react";

import styles from "./Sidebar.module.css";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import SidebarToolbar from "./SidebarToolbar";
import SidebarRows from "./SidebarRows";

const ListItems = [
    {
        label: "Item 1",
    },
    {
        label: "Item 2",
    },
    {
        label: "Item 3",
        children: [
            { label: "Item 3.1" },
            {
                label: "Item 3.2",
                children: [
                    {
                        label: "Item 3.2.1",
                        children: [
                            { label: "Item 3.2.1.1" },
                            {
                                label: "Item 3.2.1.2",
                                children: [
                                    { label: "Item 3.2.1.2.1" },
                                    { label: "Item 3.2.1.2.2" },
                                    { label: "Item 3.2.1.2.3" },
                                ],
                            },
                            { label: "Item 3.2.1.3" },
                        ],
                    },
                    { label: "Item 3.2.2" },
                    { label: "Item 3.2.3" },
                ],
            },
            { label: "Item 3.3" },
        ],
    },
    {
        label: "Item 4",
        children: [
            { label: "Item 4.1" },
            { label: "Item 4.2" },
            { label: "Item 4.3" },
            { label: "Item 4.4" },
            { label: "Item 4.5" },
            { label: "Item 4.6" },
            { label: "Item 4.7" },
            { label: "Item 4.8" },
            { label: "Item 4.9" },
            { label: "Item 4.10" },
            { label: "Item 4.11" },
            { label: "Item 4.12" },
            { label: "Item 4.13" },
            { label: "Item 4.14" },
            { label: "Item 4.15" },
            { label: "Item 4.16" },
            { label: "Item 4.17" },
            { label: "Item 4.18" },
            { label: "Item 4.19" },
            { label: "Item 4.20" },
            { label: "Item 4.21" },
            { label: "Item 4.22" },
            { label: "Item 4.23" },
            { label: "Item 4.24" },
            { label: "Item 4.25" },
            { label: "Item 4.26" },
            { label: "Item 4.27" },
            { label: "Item 4.28" },
            { label: "Item 4.29" },
            { label: "Item 4.30" },
        ],
    },
    {
        label: "Item 5",
    },
];

export const Sidebar = (): React.ReactNode => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <nav
            className={`${styles.sidebarContainer} ${
                collapsed ? styles.sidebarCollapsed : ``
            }`}
        >
            <div>
                <SidebarToolbar />
                {/* Sidebar items */}
                <SidebarRows data={ListItems} />
            </div>
            {/* Right side expand/collapse bar */}
            <div
                className={styles.sidebarExpandBar}
                onClick={(e) => setCollapsed((e) => !e)}
            >
                {collapsed ? (
                    <MdChevronRight size={"1rem"} />
                ) : (
                    <MdChevronLeft size={"1rem"} />
                )}
            </div>
        </nav>
    );
};

export default Sidebar;
