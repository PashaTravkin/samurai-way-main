import {ActionsType} from "./ActionsType";

export type dialogsDataType = {
    id: number,
    name: string,
    avatar?: string
}

export type messagesDataType = {
    id: number,
    message: string,
    avatarMessage: string
}

export type AppMessagePageType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageDialogText: string
}

let initializeDialogsState = {
    dialogsData: [
        {
            id: 1,
            name: 'Sasha',
            avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'
        },
        {
            id: 2,
            name: 'Masha',
            avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
        },
        {
            id: 3,
            name: 'Lera',
            avatar: 'https://sun9-60.userapi.com/s/v1/if2/X5eLXzG9LeAKYth6RI12p85xPr3g8BKTUmR9tk4UBwKZCm3ZTKH06tdV2M5qQ8DWBzeGtlPcNFfmkikTc6Q4Jy8A.jpg?size=604x604&quality=96&type=album'
        },
        {id: 4, name: 'Nika', avatar: 'https://mixmag.io/wp-content/pics/75268/image089-13-720x720.jpg'},
        {id: 5, name: 'Dasha', avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/_1_24.jpg'}
    ],
    messagesData: [
        {
            id: 1,
            message: 'Hi, how are you???',
            avatarMessage: 'https://mixmag.io/wp-content/pics/75268/image089-13-720x720.jpg'
        },
        {
            id: 2,
            message: 'I am ok thank you, and you?',
            avatarMessage: 'https://meragor.com/files/styles//220_220_bottom_wm/_1_24.jpg'
        },
        {
            id: 3,
            message: 'I am fine too)',
            avatarMessage: 'https://mixmag.io/wp-content/pics/75268/image089-13-720x720.jpg'
        },
    ],
    newMessageDialogText: ''
}

const DialogsReducer = (dialogState:AppMessagePageType =initializeDialogsState , action:ActionsType):AppMessagePageType => {
    debugger

    switch (action.type) {
        case 'NEW_MESSAGE_DIALOG_TEXT':
            dialogState.newMessageDialogText = action.newDialogText
            return {...dialogState}
        case 'ADD_MESSAGE_DIALOG':
            let newMessageData = {
                id: 7,
                message: dialogState.newMessageDialogText,
                avatarMessage: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-e7202eb.jpg'
            }
            dialogState.messagesData.push(newMessageData)
            dialogState.newMessageDialogText = ''
            return {...dialogState}
        default:
            return dialogState
    }
}

export const addMessageDialogAC = () => ({type: 'ADD_MESSAGE_DIALOG'} as const)

export const newMessageDialogTextAC = (text: string) => {
    debugger
    return {
    type: 'NEW_MESSAGE_DIALOG_TEXT',
    newDialogText: text
} as const}

export default DialogsReducer;