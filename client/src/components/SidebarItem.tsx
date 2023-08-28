import React, { useState } from "react";

import styles from "./SidebarItem.module.css";

import { MdAdd, MdRemove } from "react-icons/md";
import IconButton from "./IconButton";

type SidebarItemProps = {
    children: React.ReactNode;
};

export const SidebarItem = (props: SidebarItemProps): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.sidebarItem}>
            <IconButton
                onClick={(e) => setIsOpen((o) => !o)}
                style={{ height: "1rem", paddingRight: "0.5rem" }}
            >
                {isOpen ? <MdRemove /> : <MdAdd />}
            </IconButton>
            {props.children}
        </div>
    );
};

export default SidebarItem;
