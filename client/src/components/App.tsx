import React, { useState } from "react";

import Header from "./Header";

import "./App.css";
import Sidebar from "./Sidebar";

export const App = (): React.ReactNode => {
    if (!localStorage.getItem("theme")) localStorage.setItem("theme", "app-theme-dark");

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const themeToggler = () => {
        setTheme((curr) => {
            const newTheme =
                curr === "app-theme-dark" ? "app-theme-light" : "app-theme-dark";
            localStorage.setItem("theme", newTheme);
            return newTheme;
        });
    };

    return (
        <div className={`app-container ${theme}`}>
            <Header toggleTheme={themeToggler} />
            <Sidebar />
            <div className="content">Hello world!</div>
        </div>
    );
};

export default App;
