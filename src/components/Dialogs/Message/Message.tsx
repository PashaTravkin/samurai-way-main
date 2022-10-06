import React from "react";
import s from "./Message.module.css";

type MessageTypeProps = {
    message: string
    avatar:string
}

export const Message = (props: MessageTypeProps) => {
    return (
        <div><img className={s.ava} src={props.avatar} alt="There is a ava"/> {props.message} </div>
    )

}