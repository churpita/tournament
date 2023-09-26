import React from "react";

import styles from "./SidebarToolbar.module.css";
import { MdAddCircle, MdRemoveCircleOutline } from "react-icons/md";
import IconButton from "../IconButton";

type SidebarToolbarProps = {
    expandAllTrigger: React.Dispatch<React.SetStateAction<boolean>>;
    collapseAllTrigger: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarToolbar = (props: SidebarToolbarProps): React.ReactNode => {
    return (
        <div className={styles.toolbar}>
            <IconButton
                onClick={(e) => {
                    props.expandAllTrigger((prev) => !prev);
                }}
                style={{ height: "1rem", paddingRight: "0.5rem" }}
                tooltip={{
                    text: "Expand All",
                    offset: { bottom: "3rem" },
                }}
            >
                <MdAddCircle />
            </IconButton>
            <IconButton
                onClick={(e) => {
                    props.collapseAllTrigger((prev) => !prev);
                }}
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
