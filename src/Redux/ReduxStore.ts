import {combineReducers} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";
import UsersReducer from "./UsersReducer";
import { legacy_createStore as createStore} from 'redux'

export type AppStateType = ReturnType<typeof rootReducer>

let rootReducer = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
    usersPage:UsersReducer
})

export type StoreType = typeof store

let store = createStore(rootReducer)

// @ts-ignore
window.store = store


export default store