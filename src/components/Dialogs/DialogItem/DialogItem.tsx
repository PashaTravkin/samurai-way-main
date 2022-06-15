import s from "../Dialog.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    name: string,
    id: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + '' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}