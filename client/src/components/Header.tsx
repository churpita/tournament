import React from "react";

import IconButton from "./IconButton";

import { MdDarkMode } from "react-icons/md";

import styles from "./Header.module.css";

type Props = {
    toggleTheme: React.MouseEventHandler;
};

export const Header = (props: Props): React.ReactNode => {
    return (
        <header className={styles.header}>
            <span>Tournament</span>
            <IconButton
                style={{ height: "2rem" }}
                tooltip={{
                    text: "Toggle dark mode",
                    offset: { top: "0", right: "12rem" },
                }}
            >
                <MdDarkMode onClick={props.toggleTheme} size={"2em"} />
            </IconButton>
        </header>
    );
};

export default Header;
