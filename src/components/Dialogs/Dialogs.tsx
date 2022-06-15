import React from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, name: 'Sasha'},
        {id: 2, name: 'Masha'},
        {id: 3, name: 'Lera'},
        {id: 4, name: 'Nika'},
        {id: 5, name: 'Dasha'}
    ]
    let messagesData = [
        {id: 1, message: 'Hi, how are you???'},
        {id: 2, message: 'I am ok thank you, and you?'},
        {id: 3, message: 'I am fine too)'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {messagesData.map(m=><Message message={m.message}/>)}
            </div>
        </div>
    )
}
export default Dialogs