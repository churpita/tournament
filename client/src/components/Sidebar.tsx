import React, { useState } from "react";

import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
                    { label: "Item 3.2.1" },
                    { label: "Item 3.2.2" },
                    { label: "Item 3.2.3" },
                ],
            },
            { label: "Item 3.3" },
        ],
    },
    {
        label: "Item 4",
        children: [{ label: "Item 4.1" }, { label: "Item 4.2" }],
    },
    {
        label: "Item 5",
    },
];

export const Sidebar = (): React.ReactNode => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <nav className={styles.sidebarContainer}>
            <ul className={`${styles.sidebarList} ${collapsed && styles.sidebarCollapsed} `}>
                {ListItems.map((item, index) => {
                    return <SidebarItem key={`${item.label}-${index}`} item={item} />;
                })}
            </ul>
            <div className={styles.sidebarExpandBar} onClick={(e) => setCollapsed((e) => !e)}>
                {collapsed ? <MdChevronRight size={"1rem"} /> : <MdChevronLeft size={"1rem"} />}
            </div>
        </nav>
    );
};

export default Sidebar;
