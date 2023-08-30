import React, { useState } from "react";

import styles from "./SidebarItem.module.css";

import { MdAdd, MdRemove } from "react-icons/md";
import IconButton from "./IconButton";

type SidebarItemProps = {
    item: { label: string; hasChildren: boolean };
};

export const SidebarItem = (props: SidebarItemProps): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={styles.sidebarItem}
            onClick={(e) => props.item.hasChildren && setIsOpen((o) => !o)}
        >
            {props.item.hasChildren && (
                <IconButton style={{ height: "1rem", paddingRight: "0.5rem" }}>
                    {isOpen ? <MdRemove /> : <MdAdd />}
                </IconButton>
            )}
            {props.item.label}
        </div>
    );
};

export default SidebarItem;
