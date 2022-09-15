import {addPostAC, onChangeTextHandlerAC} from "./ProfileReducer";
import {addMessageDialogAC, newMessageDialogTextAC} from "./DialogsReducer";
import {followingAC, setCurrentTargetAC, setPreloaderAC, setTotalUsersCountAC, setUsersAC} from "./UsersReducer";

export type ActionsType = AddPostActionType
    | NewPostTextActionType
    | NewMessageDialogTextActionType
    | AddMessageDialogActionType
    | FollowingType
    | SetUsersType
    | setCurrentTargetType
    | setTotalUsersCountType
    | setPreloaderACType

type AddPostActionType = ReturnType<typeof addPostAC>
type NewPostTextActionType = ReturnType<typeof onChangeTextHandlerAC>
type NewMessageDialogTextActionType = ReturnType<typeof newMessageDialogTextAC>
type AddMessageDialogActionType = ReturnType<typeof addMessageDialogAC>
type FollowingType = ReturnType<typeof followingAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type setCurrentTargetType = ReturnType<typeof setCurrentTargetAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type setPreloaderACType = ReturnType<typeof setPreloaderAC>
