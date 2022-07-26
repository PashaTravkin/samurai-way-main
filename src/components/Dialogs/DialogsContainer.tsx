import React from "react";
import Dialogs from "./Dialogs";
import {addMessageDialogAC, newMessageDialogTextAC} from "../../Redux/DialogsReducer";
import StoreContext from "../../StoreContext";

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

const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {
        (store)=> {
            let state = store.getState()
            let onChangeMessage = (text: string) => {
                const action = newMessageDialogTextAC(text)
                store.dispatch(action)
            }

            const onAddMessage = () => {
                const action = addMessageDialogAC()
                store.dispatch(action)
            }
        return  <Dialogs onChangeMessage={onChangeMessage} onAddMessage={onAddMessage} dialogsPages={state.dialogsPage}/>
        }
    }
    </StoreContext.Consumer>
}
export default DialogsContainer