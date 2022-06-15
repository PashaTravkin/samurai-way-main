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
                <DialogItem name = {dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                < Message message= {messagesData[0].message} />
                < Message message={messagesData[1].message}/>
                < Message message={messagesData[2].message}/>

            </div>
        </div>
    )
}
export default Dialogs