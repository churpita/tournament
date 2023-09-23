import React from "react";
import styles from "./SidebarRows.module.css";
import SidebarItem from "./SidebarItem";

type SidebarRowsProps = {
    data: { label: string; children?: { label: string }[] }[];
};

export const SidebarRows = (props: SidebarRowsProps) => {
    return (
        <ul className={styles.sidebarList}>
            {props.data.map((item, index) => {
                return <SidebarItem key={`${item.label}-${index}`} item={item} />;
            })}
        </ul>
    );
};

export default SidebarRows;
