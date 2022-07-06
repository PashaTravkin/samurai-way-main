import React from "react";
import "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {sidebarType} from "../../Redux/State";

type statePropsType = {
    state: Array<sidebarType>
}

export let Navbar = (props: statePropsType) => {
    return (
        <>
            <nav className={s.itemBar}>
                <div className={s.links}><NavLink activeClassName={s.active} to={'/profile'}>Profile</NavLink></div>
                <div className={s.links}><NavLink activeClassName={s.active} to={'/dialogs'}>Message</NavLink></div>
                <div className={s.links}><NavLink activeClassName={s.active} to={'/news'}>News</NavLink></div>
                <div className={s.links}><NavLink activeClassName={s.active} to={'/music'}>Music</NavLink></div>
                <div className={s.links}><NavLink activeClassName={s.active} to={'/settings'}>Settings</NavLink></div>
                <div className={s.titleFriends}>Friends</div>
                <div className={s.theBestFriends}>

                    <div className={s.theBestFriend}>
                        <div><img src={props.state[0].ava}/></div>
                        <div>{props.state[0].name}</div>
                    </div>

                    <div className={s.theBestFriend}>
                        <div><img src={props.state[1].ava}/></div>
                        <div>{props.state[1].name}</div>
                    </div>

                    <div className={s.theBestFriend}>
                        <div><img src={props.state[2].ava}/></div>
                        <div>{props.state[2].name}</div>

                    </div>
                </div>
            </nav>
        </>
    )
}
