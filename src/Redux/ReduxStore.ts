import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";
import {rerenderEntireTreeType} from "../index";
import {ActionsType} from "./ActionsType";

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
})

// export type storeType = {
//     _state: StateType
//     subscribe: (observer: rerenderEntireTreeType) => void
//     _callSubscriber: () => void
//     getState: () => StateType
//     dispatch: (action: ActionsType) => void
// }

export type StoreType = typeof store

let store = createStore(reducers)

export default store