import React from "react";
import {addPostAC, onChangeTextHandlerAC, ProfilePageType} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/ReduxStore";
import {Dispatch} from "redux";

export type MyPostsContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType={
    profilePage:ProfilePageType
}
const mapStateToProps =(state:AppStateType):MapStateToPropsType=>{
    return{
        profilePage:state.profilePage
    }
}

type MapDispatchToPropsType ={
    onChangeTextHandler:(text:string)=>void
    onClickAddPost:()=>void
}
const mapDispatchToProps =(dispatch:Dispatch):MapDispatchToPropsType=>{
    return{
        onChangeTextHandler:(text:string)=>{
            let action = onChangeTextHandlerAC(text)
            dispatch(action)},
        onClickAddPost:()=>{
            let action=addPostAC()
            dispatch(action)
        }
    }
}

export let MyPostsContainer =connect(mapStateToProps, mapDispatchToProps)(MyPosts)

