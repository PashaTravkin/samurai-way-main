import React, {ChangeEvent} from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ActionsType,dialogsDataType,messagesDataType,} from "../../Redux/Store";
import {addMessageDialogAC, newMessageDialogTextAC} from "../../Redux/DialogsReducer";

type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>
    newMessageDialogText: string
}

type statePropsType = {
    state: DialogsPropsType
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<statePropsType> = (props) => {

    let onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
            props.dispatch(newMessageDialogTextAC(text))
        }
    }

    const onClickAddMessage = () => {
        const action = addMessageDialogAC()
        props.dispatch(action)
    }

    return (
        <>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {props.state.dialogsData.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name}
                                                                  id={d.id}/>)}
                </div>
                <div className={s.messages}>
                    {props.state.messagesData.map(m =>
                        <Message key={m.id} message={m.message} avatar={m.avatarMessage}/>)}
                </div>
            </div>

            <div className={s.addMessage}>
                <textarea value={props.state.newMessageDialogText} onChange={onChangeHandler} cols={40}
                          rows={5}></textarea>
                <button onClick={onClickAddMessage}>add message</button>
            </div>
        </>
    )
}
export default Dialogs