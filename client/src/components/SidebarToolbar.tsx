import React from "react";

import styles from "./SidebarToolbar.module.css";
import { MdAddCircle } from "react-icons/md";
import IconButton from "./IconButton";

export const SidebarToolbar = (): React.ReactNode => {
    return (
        <div className={styles.toolbar}>
            <IconButton style={{ height: "1rem" }}>
                <MdAddCircle />
            </IconButton>
        </div>
    );
};

export default SidebarToolbar;
