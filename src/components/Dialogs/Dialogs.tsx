import React from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsDataType, messagesDataType} from "../../App";

type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>
}

type statePropsType={
    state:DialogsPropsType
}

const Dialogs: React.FC<statePropsType> = (props) => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.state.dialogsData.map(d => <DialogItem avatar={d.avatar} name={d.name} id={d.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.messagesData.map(m => <Message message={m.message}/>)}
            </div>
        </div>
    )
}
export default Dialogs