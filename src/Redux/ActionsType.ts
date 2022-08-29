import {addPostAC, onChangeTextHandlerAC} from "./ProfileReducer";
import {addMessageDialogAC, newMessageDialogTextAC} from "./DialogsReducer";
import {followingAC, setUsersAC} from "./UsersReducer";

export type ActionsType = AddPostActionType
    | NewPostTextActionType
    | NewMessageDialogTextActionType
    | AddMessageDialogActionType
    | FollowingType
    | SetUsersType

type AddPostActionType = ReturnType<typeof addPostAC>
type NewPostTextActionType = ReturnType<typeof onChangeTextHandlerAC>
type NewMessageDialogTextActionType = ReturnType<typeof newMessageDialogTextAC>
type AddMessageDialogActionType = ReturnType<typeof addMessageDialogAC>
type FollowingType = ReturnType<typeof followingAC>
type SetUsersType = ReturnType<typeof setUsersAC>
