import React from "react";

import styles from "./SidebarToolbar.module.css";
import { MdAddCircle, MdRemoveCircleOutline } from "react-icons/md";
import IconButton from "./IconButton";

export const SidebarToolbar = (): React.ReactNode => {
    return (
        <div className={styles.toolbar}>
            <IconButton
                style={{ height: "1rem", paddingRight: "0.5rem" }}
                tooltip={{
                    text: "Expand All",
                    offset: { bottom: "3rem" },
                }}
            >
                <MdAddCircle />
            </IconButton>
            <IconButton
                style={{ height: "1rem" }}
                tooltip={{
                    text: "Collapse All",
                    offset: { bottom: "3rem" },
                }}
            >
                <MdRemoveCircleOutline />
            </IconButton>
        </div>
    );
};

export default SidebarToolbar;
