import React from "react";

import styles from "./IconButton.module.css";

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const IconButton = (props: Props) => {
    return (
        <div
            className={styles.icon}
            style={props.style}
        >
            {props.children}
        </div>
    );
};

export default IconButton;