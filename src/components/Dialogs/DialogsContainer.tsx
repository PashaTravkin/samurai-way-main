import React from "react";
import Dialogs from "./Dialogs";
import {addMessageDialogAC, AppMessagePageType, newMessageDialogTextAC} from "../../Redux/DialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/ReduxStore";
import {Dispatch} from "redux";

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType={
    dialogPages:AppMessagePageType
}
let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    debugger
    return {
        dialogPages:state.dialogsPage
    }
}

type MapDispatchToPropsType ={
    onChangeMessage:(text: string)=>void
    onAddMessage:()=>void
}
let mapDispatchToProps = (dispatch:Dispatch):MapDispatchToPropsType => {
    debugger
    return {
        onChangeMessage: (text: string) => {
            const action = newMessageDialogTextAC(text)
            dispatch(action)
        },
        onAddMessage:() => {
            const action = addMessageDialogAC()
            dispatch(action)
        }
    }
}

export let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
