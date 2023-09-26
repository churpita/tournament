import React from "react";
import styles from "./SidebarRows.module.css";
import SidebarItem from "./SidebarItem";

type SidebarRowsProps = {
    data: { label: string; children?: { label: string }[] }[];
    width: string;
    expandAllListener: boolean;
    collapseAllListener: boolean;
};

export const SidebarRows = (props: SidebarRowsProps) => {
    return (
        <ul className={styles.sidebarList} style={{ width: props.width }}>
            {props.data.map((item, index) => {
                return (
                    <SidebarItem
                        key={`${item.label}-${index}`}
                        item={item}
                        expandAllListener={props.expandAllListener}
                        collapseAllListener={props.collapseAllListener}
                    />
                );
            })}
        </ul>
    );
};

export default SidebarRows;
