import React from "react";
import "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {sidebarType} from "../../Redux/SidebarReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";



export let Navbar = (props:NavbarPropsType) => {
    debugger
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
                        <div><img src={props.sidebar[0].ava}/></div>
                        <div>{props.sidebar[0].name}</div>
                    </div>

                    <div className={s.theBestFriend}>
                        <div><img src={props.sidebar[1].ava}/></div>
                        <div>{props.sidebar[1].name}</div>
                    </div>

                    <div className={s.theBestFriend}>
                        <div><img src={props.sidebar[2].ava}/></div>
                        <div>{props.sidebar[2].name}</div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export type NavbarPropsType=mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType={
    sidebar:Array<sidebarType>
}
const mapStateToProps=(state:AppStateType):mapStateToPropsType=>{
    return{
        sidebar:state.sidebar
    }
}

type mapDispatchToPropsType ={

}
const mapDispatchToProps=()=>{
    return{}
}

export let NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar)
