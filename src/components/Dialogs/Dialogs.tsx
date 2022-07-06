import React from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogsDataType, messagesDataType} from "../../Redux/State";

type DialogsPropsType = {
    dialogsData: Array<dialogsDataType>,
    messagesData: Array<messagesDataType>
}

type statePropsType = {
    state: DialogsPropsType
}

const Dialogs: React.FC<statePropsType> = (props) => {


    let newMessage = React.createRef<HTMLTextAreaElement>()

    let addMessage =()=>{
        let text = newMessage.current?.value
            alert(text)


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
                <textarea  ref={newMessage} cols={40} rows={5}></textarea>
                <button onClick={addMessage} >add message</button>
            </div>
        </>
    )
}
export default Dialogs