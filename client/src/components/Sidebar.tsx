import React from "react";

import styles from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";

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
    return (
        <nav className={styles.sidebarContainer}>
            <ul>
                {ListItems.map((item) => {
                    return <SidebarItem key={item.id} item={item} />;
                })}
            </ul>
        </nav>
    );
};

export default Sidebar;
