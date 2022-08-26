import React, {ChangeEvent} from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";

const Dialogs = (props: DialogsPropsType) => {
    debugger
    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let text = e.currentTarget.value
        if (text) {
            props.onChangeMessage(text)
        }
    }

    const onClickAddMessage = () => {
        props.onAddMessage()
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.dialogPages.dialogsData.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name}
                                                                        id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {props.dialogPages.messagesData.map(m =>
                        <Message key={m.id} message={m.message} avatar={m.avatarMessage}/>)}
                </div>
            </div>

            <div className={s.addMessage}>
                <textarea value={props.dialogPages.newMessageDialogText} onChange={onChangeHandler} cols={40}
                          rows={5}></textarea>
                <button onClick={onClickAddMessage}>add message</button>
            </div>
        </>
    )
}
export default Dialogs