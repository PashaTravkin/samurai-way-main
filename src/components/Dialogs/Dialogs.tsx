import React, {ChangeEvent} from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {AppMessagePagePropsType} from "../../Redux/DialogsReducer";

// type DialogsPropsType = {
//     dialogsData: Array<dialogsDataType>,
//     messagesData: Array<messagesDataType>
//     newMessageDialogText: string
// }
//
// type statePropsType = {
//     state: DialogsPropsType
//     dispatch: (action: ActionsType) => void
// }

type DialogsPropsType = {
    onChangeMessage:(text:string)=>void
    onAddMessage:()=>void
    dialogsPages:AppMessagePagePropsType
}

const Dialogs= (props:DialogsPropsType) => {

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
                    {props.dialogsPages.dialogsData.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name}
                                                                  id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {props.dialogsPages.messagesData.map(m =>
                        <Message key={m.id} message={m.message} avatar={m.avatarMessage}/>)}
                </div>
            </div>

            <div className={s.addMessage}>
                <textarea value={props.dialogsPages.newMessageDialogText} onChange={onChangeHandler} cols={40}
                          rows={5}></textarea>
                <button onClick={onClickAddMessage}>add message</button>
            </div>
        </>
    )
}
export default Dialogs