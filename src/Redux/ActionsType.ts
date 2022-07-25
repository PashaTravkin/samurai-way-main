import {addPostAC, onChangeTextHandlerAC} from "./ProfileReducer";
import {addMessageDialogAC, newMessageDialogTextAC} from "./DialogsReducer";

export type ActionsType = AddPostActionType| NewPostTextActionType| NewMessageDialogTextActionType| AddMessageDialogActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type NewPostTextActionType = ReturnType<typeof onChangeTextHandlerAC>
type NewMessageDialogTextActionType = ReturnType<typeof newMessageDialogTextAC>
type AddMessageDialogActionType = ReturnType<typeof addMessageDialogAC>