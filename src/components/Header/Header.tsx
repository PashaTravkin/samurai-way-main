import React from "react";
import classes from "./Header.module.css"

export let Header = () => {
    return (<>
        <header>
            <img className={classes.logo}
                 src="https://w7.pngwing.com/pngs/925/348/png-transparent-logo-online-and-offline-e-online-design-text-logo-online-and-offline.png"/>
        <span> Wll be always online!!!!!</span>
        </header>
    </>)
}

