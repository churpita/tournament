import React, { useState, useEffect } from "react";

import styles from "./SidebarItem.module.css";

import { MdAddCircle, MdRemoveCircleOutline } from "react-icons/md";
import IconButton from "./IconButton";

type SidebarItemProps = {
    item: { label: string; children?: { label: string }[] };
    expandAllListener: boolean;
    collapseAllListener: boolean;
};

export const SidebarItem = (props: SidebarItemProps): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        setIsOpen(true);
    }, [props.expandAllListener]);

    useEffect(() => {
        setIsOpen(false);
    }, [props.collapseAllListener]);

    // Leaf/Child Node (has no further children)
    if (!props.item.children) {
        return <div className={styles.sidebarItem}>{props.item.label}</div>;
    }
    // Parent Node Container (contains additional Parent Nodes/Child Nodes)
    else {
        return (
            <div>
                {/* Expandable parent node */}
                <div className={styles.sidebarItem} onClick={(e) => setIsOpen((o) => !o)}>
                    <IconButton style={{ height: "1rem", paddingRight: "0.5rem" }}>
                        {isOpen ? <MdRemoveCircleOutline /> : <MdAddCircle />}
                    </IconButton>
                    {props.item.label}
                </div>
                {/* Recursive child nodes */}
                <div
                    className={`${styles.sidebarItemChildren} ${
                        isOpen ? styles.setAsVisible : ``
                    }`}
                >
                    <div>
                        {props.item.children.map((item, index) => {
                            return (
                                <SidebarItem
                                    key={`${item.label}-${index}`}
                                    item={item}
                                    expandAllListener={props.expandAllListener}
                                    collapseAllListener={props.collapseAllListener}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    }
};

export default SidebarItem;
