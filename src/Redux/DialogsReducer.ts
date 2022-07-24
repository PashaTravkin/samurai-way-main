import {ActionsType, AppMessagePagePropsType} from "./State";

const DialogsReducer = (dialogState:AppMessagePagePropsType, action:ActionsType) => {
    switch (action.type) {
        case 'NEW_MESSAGE_DIALOG_TEXT':
            dialogState.newMessageDialogText = action.newDialogText
            return dialogState
        case 'ADD_MESSAGE_DIALOG':
            let newMessageData = {
                id: 7,
                message: dialogState.newMessageDialogText,
                avatarMessage: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg'
            }
            dialogState.messagesData.push(newMessageData)
            dialogState.newMessageDialogText = ''
            return dialogState
        default:
            return dialogState
    }
}

export default DialogsReducer;