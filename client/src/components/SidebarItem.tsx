import React, { useState } from "react";

import styles from "./SidebarItem.module.css";

import { MdAdd, MdRemove } from "react-icons/md";
import IconButton from "./IconButton";

type SidebarItemProps = {
    item: { label: string; children?: { label: string }[] };
};

export const SidebarItem = (props: SidebarItemProps): React.ReactNode => {
    // Child Node
    if (!props.item.children) {
        return <div className={styles.sidebarItemChild}>{props.item.label}</div>;
    }
    // Parent Node Container (contains additional Parent Nodes/Child Nodes)
    else {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className={styles.sidebarItem}>
                {/* Expandable parent node */}
                <div className={styles.sidebarItemParent} onClick={(e) => setIsOpen((o) => !o)}>
                    <IconButton style={{ height: "1rem", paddingRight: "0.5rem" }}>
                        {isOpen ? <MdRemove /> : <MdAdd />}
                    </IconButton>
                    {props.item.label}
                </div>
                {/* Recursive child nodes */}
                {isOpen && (
                    <div className={styles.sidebarItemChildren}>
                        {props.item.children.map((item, index) => {
                            return <SidebarItem key={`${item.label}-${index}`} item={item} />;
                        })}
                    </div>
                )}
            </div>
        );
    }
};

export default SidebarItem;
