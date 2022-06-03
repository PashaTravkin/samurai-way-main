import React from "react";
import "./Navbar.css"
import {NavLink} from "react-router-dom";
export let Navbar = () => {
    return (
        <>
            <nav>
                <div><NavLink to={'/profile'}>Profile</NavLink></div>
                <div><NavLink to={'/dialogs'}>Message</NavLink></div>
                <div><NavLink to={'/news'}>News</NavLink></div>
                <div><NavLink to={'/music'}>Music</NavLink></div>
                <div><NavLink to={'/settings'}>Settings</NavLink></div>
            </nav>
        </>
    )
}
