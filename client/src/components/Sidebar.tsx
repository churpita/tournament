import React, { useState } from "react";

import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import IconButton from "./IconButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ListItems = [
    {
        id: 1,
        label: "Item 1",
        hasChildren: false,
    },
    {
        id: 2,
        label: "Item 2",
        hasChildren: false,
    },
    {
        id: 3,
        label: "Item 3",
        hasChildren: false,
    },
    {
        id: 4,
        label: "Item 4",
        hasChildren: true,
    },
    {
        id: 5,
        label: "Item 5",
        hasChildren: false,
    },
];

export const Sidebar = (): React.ReactNode => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <nav className={styles.sidebarContainer}>
            <ul
                className={`${styles.sidebarList} ${
                    collapsed && styles.sidebarCollapsed
                } `}
            >
                {ListItems.map((item) => {
                    return <SidebarItem key={item.id} item={item} />;
                })}
            </ul>
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
