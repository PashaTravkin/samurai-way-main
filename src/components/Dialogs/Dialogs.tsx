import React from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Sasha' id="1"/>
                <DialogItem name='Masha' id="2"/>
                <DialogItem name='Lera' id="3"/>
                <DialogItem name='Nika' id="4"/>
                <DialogItem name='Sasha' id="5"/>
            </div>
            <div className={s.messages}>
                < Message message='Hi, how are you???'/>
                < Message message='I am ok thank you, and you?'/>
                < Message message='I am fine too)'/>

            </div>
        </div>
    )
}
export default Dialogs