import React from "react";

import styles from "./IconButton.module.css";

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler;
    tooltip?: {
        text: string;
        offset?: {
            top?: string;
            bottom?: string;
            left?: string;
            right?: string;
        };
    };
};

export const IconButton = (props: Props): React.ReactNode => {
    return (
        <div className={styles.icon} {...props}>
            {props.children}
            {props.tooltip && (
                <div className={`${styles.tooltipParent}`} style={props.tooltip.offset}>
                    <span className={styles.tooltipText}>{props.tooltip.text}</span>
                </div>
            )}
        </div>
    );
};

export default IconButton;
