import React from "react";
import {addPostAC, onChangeTextHandlerAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";


export let MyPostsContainer= (props:any) => {
    let state = props.store.getState().profilePage

    let onClickAddPost = () => {
        let action=addPostAC()
        props.store.dispatch(action)
    }

    const onChangeTextHandler = (text:string) => {
        let action = onChangeTextHandlerAC(text)
        props.store.dispatch(action)
    }

    return (
        <MyPosts onClickAddPost = {onClickAddPost} onChangeTextHandler = {onChangeTextHandler} state={state} />
    )
}

