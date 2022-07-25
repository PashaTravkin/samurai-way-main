import {rerenderEntireTreeType} from "../index";
import SidebarReducer from "./SidebarReducer";
import ProfileReducer, {addPostAC, onChangeTextHandlerAC} from "./ProfileReducer";
import DialogsReducer, {addMessageDialogAC, newMessageDialogTextAC} from "./DialogsReducer";

export type MyPostPropsType = {
    id: number,
    message: string,
    likesCount: number
}

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

export type AppMessagePagePropsType = {
    dialogsData: Array<dialogsDataType>
    messagesData: Array<messagesDataType>
    newMessageDialogText: string
}

export type profilePageType = {
    newText: string
    postsData: Array<MyPostPropsType>,
}

export type sidebarType = {
    id: number,
    name: string,
    ava: string
}


export type AppPropsType = {
    profilePage: profilePageType,
    dialogsPage: AppMessagePagePropsType
    sidebar: Array<sidebarType>
}

export type allAppPropsType = {
    state: AppPropsType
    dispatch: (action: ActionsType) => void
}

export type storeType = {
    _state: AppPropsType
    subscribe: (observer: rerenderEntireTreeType) => void
    _callSubscriber: () => void
    getState: () => AppPropsType
    dispatch: (action: ActionsType) => void
}

export type ActionsType = AddPostActionType| NewPostTextActionType| NewMessageDialogTextActionType| AddMessageDialogActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type NewPostTextActionType = ReturnType<typeof onChangeTextHandlerAC>
type NewMessageDialogTextActionType = ReturnType<typeof newMessageDialogTextAC>
type AddMessageDialogActionType = ReturnType<typeof addMessageDialogAC>

// export let store: storeType = {
//     _state: {
//         profilePage: {
//             newText: '',
//             postsData: [
//                 {id: 3, message: "Hello, how are you?", likesCount: 1},
//                 {id: 4, message: ' What\'s your name?', likesCount: 5}
//             ]
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {
//                     id: 1,
//                     name: 'Sasha',
//                     avatar: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'
//                 },
//                 {
//                     id: 2,
//                     name: 'Masha',
//                     avatar: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
//                 },
//                 {
//                     id: 3,
//                     name: 'Lera',
//                     avatar: 'https://sun9-60.userapi.com/s/v1/if2/X5eLXzG9LeAKYth6RI12p85xPr3g8BKTUmR9tk4UBwKZCm3ZTKH06tdV2M5qQ8DWBzeGtlPcNFfmkikTc6Q4Jy8A.jpg?size=604x604&quality=96&type=album'
//                 },
//                 {id: 4, name: 'Nika', avatar: 'https://mixmag.io/wp-content/pics/75268/image089-13-720x720.jpg'},
//                 {id: 5, name: 'Dasha', avatar: 'https://meragor.com/files/styles//220_220_bottom_wm/_1_24.jpg'}
//             ],
//             messagesData: [
//                 {
//                     id: 1,
//                     message: 'Hi, how are you???',
//                     avatarMessage: 'https://mixmag.io/wp-content/pics/75268/image089-13-720x720.jpg'
//                 },
//                 {
//                     id: 2,
//                     message: 'I am ok thank you, and you?',
//                     avatarMessage: 'https://meragor.com/files/styles//220_220_bottom_wm/_1_24.jpg'
//                 },
//                 {
//                     id: 3,
//                     message: 'I am fine too)',
//                     avatarMessage: 'https://mixmag.io/wp-content/pics/75268/image089-13-720x720.jpg'
//                 },
//             ],
//             newMessageDialogText: ''
//         },
//         sidebar: [
//             {
//                 id: 1,
//                 name: "Sasha",
//                 ava: 'https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg'
//             },
//             {
//                 id: 2,
//                 name: "Masha",
//                 ava: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'
//             },
//             {
//                 id: 3,
//                 name: "Lera",
//                 ava: 'https://sun9-60.userapi.com/s/v1/if2/X5eLXzG9LeAKYth6RI12p85xPr3g8BKTUmR9tk4UBwKZCm3ZTKH06tdV2M5qQ8DWBzeGtlPcNFfmkikTc6Q4Jy8A.jpg?size=604x604&quality=96&type=album'
//             },
//         ]
//     },
//     _callSubscriber() {
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer: rerenderEntireTreeType) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//         this._state.profilePage = ProfileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = DialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = SidebarReducer(this._state.sidebar, action)
//         this._callSubscriber()
//     }
// }











