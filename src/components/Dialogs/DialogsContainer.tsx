import React from "react";
import Dialogs from "./Dialogs";
import {addMessageDialogAC, newMessageDialogTextAC} from "../../Redux/DialogsReducer";

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

const DialogsContainer = (props:any) => {
    let state = props.store.getState()

    let onChangeMessage = (text:string) => {
        const action = newMessageDialogTextAC(text)
        props.store.dispatch(action)
    }

    const onAddMessage = () => {
        const action = addMessageDialogAC()
        props.store.dispatch(action)
    }
return <Dialogs onChangeMessage={onChangeMessage} onAddMessage={onAddMessage} dialogsPages={state.dialogsPage}/>
}
export default DialogsContainer