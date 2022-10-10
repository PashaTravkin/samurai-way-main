import {addPostAC, onChangeTextHandlerAC, setChooseUserProfileAC} from "./ProfileReducer";
import {addMessageDialogAC, newMessageDialogTextAC} from "./DialogsReducer";
import {
    followingAC,
    setCurrentTargetAC, setDisableAC,
    setPreloaderAC,
    setTotalUsersCountAC,
    setUsersAC
} from "./UsersReducer";
import {setAuthAC} from "./AuthReducer";

export type ActionsType = AddPostActionType
    | NewPostTextActionType
    | NewMessageDialogTextActionType
    | AddMessageDialogActionType
    | FollowingType
    | SetUsersType
    | setCurrentTargetType
    | setTotalUsersCountType
    | setPreloaderACType
    | setChooseUserProfileACType
    | setAuthACType
    | setDisableACType

type AddPostActionType = ReturnType<typeof addPostAC>
type NewPostTextActionType = ReturnType<typeof onChangeTextHandlerAC>
type NewMessageDialogTextActionType = ReturnType<typeof newMessageDialogTextAC>
type AddMessageDialogActionType = ReturnType<typeof addMessageDialogAC>
type FollowingType = ReturnType<typeof followingAC>
type SetUsersType = ReturnType<typeof setUsersAC>
type setCurrentTargetType = ReturnType<typeof setCurrentTargetAC>
type setTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>
type setPreloaderACType = ReturnType<typeof setPreloaderAC>
type setChooseUserProfileACType = ReturnType<typeof setChooseUserProfileAC>
type setAuthACType = ReturnType<typeof setAuthAC>
type setDisableACType = ReturnType<typeof setDisableAC>

