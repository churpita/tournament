import React from "react";

import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

const ListItems = [
    {
        id: 1,
        label: "Item 1",
    },
    {
        id: 2,
        label: "Item 2",
    },
    {
        id: 3,
        label: "Item 3",
    },
    {
        id: 4,
        label: "Item 4",
    },
    {
        id: 5,
        label: "Item 5",
    },
];

export const Sidebar = (): React.ReactNode => {
    return (
        <div className={styles.sidebarContainer}>
            <ul>
                {ListItems.map((item) => {
                    return (
                        <SidebarItem key={item.id}>{item.label}</SidebarItem>
                    );
                })}
            </ul>
        </div>
    );
};

export default Sidebar;
