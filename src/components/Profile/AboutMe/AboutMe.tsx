import classes from "./AboutMe.module.css";
import React from "react";

export let AboutMe = () => {
    return (
        <div className={classes.aboutMe}>
            <span className={classes.myPhoto}><img src="https://static.wixstatic.com/media/bcf731_88af2a77bf494bdcb2b31fb3b7ff46ed~mv2.jpg/v1/fill/w_258,h_258,al_c,lg_1,q_80,enc_auto/%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0%20cs%20go.jpg" alt=""/></span>
            <span className={classes.discription}>Diskription</span>
        </div>
    )
}