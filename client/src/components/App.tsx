import React, { useState } from "react";

import Header from "./Header";

import "./App.css";
import Sidebar from "./Sidebar/Sidebar";

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
            <Sidebar height="calc(100vh - 4rem)" width="300px" />
            <div className="content">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
                    congue lectus. Phasellus quis libero lacinia, sollicitudin nisi quis,
                    vehicula ligula. Proin id malesuada leo. Donec sollicitudin posuere
                    diam vel consequat. Etiam vel mi lobortis, consequat mi nec, tincidunt
                    leo. Quisque lectus sem, hendrerit non mattis non, dignissim tincidunt
                    nunc. Proin elementum sed metus sed hendrerit. Maecenas vitae tellus
                    dignissim, pharetra metus a, finibus elit. Proin volutpat viverra
                    tortor, quis eleifend magna ornare sed. Nunc nec tellus pulvinar,
                    consectetur dui id, egestas leo. Cras id libero ut ligula euismod
                    pulvinar. In id ex quis libero tincidunt suscipit.
                </p>
                <br />
                <p>
                    Nam ex augue, gravida id elementum in, euismod quis tellus. Donec eget
                    euismod tellus. Suspendisse sit amet sem tincidunt, consequat purus
                    nec, varius leo. Ut nec leo elit. Suspendisse potenti. Mauris nec
                    accumsan ex. Nulla feugiat nisi non semper molestie. Donec scelerisque
                    velit sed elit placerat feugiat. Pellentesque ipsum velit, semper non
                    nulla sed, ullamcorper luctus risus. Curabitur vel augue sodales,
                    aliquam purus in, cursus ante.
                </p>
                <br />
                <p>
                    Cras eu ligula non magna efficitur accumsan. Nulla tincidunt eu massa
                    ac pretium. Proin quis vulputate lectus. Duis et finibus ipsum. In
                    faucibus ullamcorper turpis, vel iaculis nunc suscipit ac. Vivamus
                    hendrerit sagittis est. Phasellus rhoncus dui non semper bibendum. Sed
                    convallis tempor risus ac sollicitudin. Mauris ante tellus, eleifend
                    at lobortis a, imperdiet nec felis. Sed maximus rhoncus tellus, non
                    sodales nisl porttitor aliquam. Etiam commodo rutrum orci quis
                    ullamcorper.
                </p>
                <br />
                <p>
                    Duis fringilla ex sed nibh efficitur, ut molestie justo maximus. Nunc
                    non eros vulputate, sollicitudin tellus cursus, vestibulum erat. Ut
                    maximus sapien vitae ante laoreet scelerisque. Donec dignissim magna
                    magna, id placerat felis ultricies eget. Praesent volutpat purus sed
                    magna faucibus laoreet. Ut eleifend justo ut laoreet viverra. Aenean
                    porttitor sapien eu elit fermentum, ut luctus nibh commodo. Integer
                    vel odio nec metus tempus efficitur eget vitae arcu. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Donec imperdiet orci sit amet urna congue auctor. Donec at
                    egestas orci. Nunc ut bibendum dolor, non egestas felis. Nunc
                    tincidunt felis vitae ex dignissim, quis egestas nisl pellentesque.
                    Donec finibus magna eget quam dignissim, egestas pellentesque justo
                    molestie. Pellentesque tristique augue eget tortor tincidunt, sit amet
                    varius nunc viverra.
                </p>
                <br />
                <p>
                    Duis imperdiet mauris sed purus dictum, eu suscipit mauris venenatis.
                    Nunc facilisis tempor eros et feugiat. Nam ac mauris elit. Ut
                    pulvinar, mauris scelerisque mattis congue, enim lectus vestibulum
                    massa, vitae placerat turpis sem at lacus. Pellentesque id sodales
                    eros. Nullam rutrum massa lacus, quis eleifend neque venenatis non.
                    Vestibulum egestas magna mi, at porta massa eleifend ut. Vestibulum
                    venenatis magna non nulla laoreet, et dapibus quam varius.
                </p>
            </div>
        </div>
    );
};

export default App;
