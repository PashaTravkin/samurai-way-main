import React from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsDataType, messagesDataType} from "../../App";

type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>
}

const Dialogs: React.FC<DialogsPropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
export default Dialogs