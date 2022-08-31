import React, {ChangeEvent} from "react";
import s from "./Dialog.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogsPropsType} from "./DialogsContainer";

class Dialogs extends React.Component<DialogsPropsType>{
    onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        if (text) {
            this.props.onChangeMessage(text)
        }
    }

    onClickAddMessage = () => {
        this.props.onAddMessage()
    }

    render(){
        return (
            <>
                <div className={s.dialogs}>
                    <div className={s.dialogsItems}>
                        {this.props.dialogPages.dialogsData.map(d => <DialogItem key={d.id} avatar={d.avatar} name={d.name}
                                                                            id={d.id}/>)}
                    </div>
                    <div className={s.messages}>
                        {this.props.dialogPages.messagesData.map(m =>
                            <Message key={m.id} message={m.message} avatar={m.avatarMessage}/>)}
                    </div>
                </div>

                <div className={s.addMessage}>
                <textarea value={this.props.dialogPages.newMessageDialogText} onChange={this.onChangeHandler} cols={40}
                          rows={5}></textarea>
                    <button onClick={this.onClickAddMessage}>add message</button>
                </div>
            </>
        )
    }
}

export default Dialogs