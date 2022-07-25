import {combineReducers, createStore} from "redux";
import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";
import SidebarReducer from "./SidebarReducer";

export type StateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    profilePage: ProfileReducer,
    dialogsPage: DialogsReducer,
    sidebar: SidebarReducer,
})

let store = createStore(reducers)

export default store