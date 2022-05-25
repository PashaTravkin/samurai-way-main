import classes from "../Profile.module.css";
import React from "react";

export let AboutMe = () => {
    return (
        <div className={classes.aboutMe}>
            <div className={classes.myPhoto}><img src="" alt=""/></div>
            <div className={classes.discription}>Diskription</div>
        </div>
    )
}