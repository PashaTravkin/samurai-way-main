import React from "react";
import "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
export let Navbar = () => {
    return (
        <>
            <nav className={s.itemBar}  >
                <div><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div><NavLink activeClassName={s.active} to={'/dialogs'}>Message</NavLink></div>
                <div><NavLink activeClassName={s.active} to={'/news'}>News</NavLink></div>
                <div><NavLink activeClassName={s.active} to={'/music'}>Music</NavLink></div>
                <div><NavLink activeClassName={s.active} to={'/settings'}>Settings</NavLink></div>
            </nav>
        </>
    )
}
