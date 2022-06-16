import s from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {dialogsDataType} from "../../../App";


export const DialogItem = (props: dialogsDataType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink  activeClassName={s.active} to={path}>
                <img className={s.ava} src={props.avatar} alt="There is a ava"/>
                <span className={s.span}>{props.name}</span>
            </NavLink>
        </div>
    )
}