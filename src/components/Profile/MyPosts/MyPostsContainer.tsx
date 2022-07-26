import React from "react";
import {addPostAC, onChangeTextHandlerAC} from "../../../Redux/ProfileReducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export let MyPostsContainer= () => {
    return (
        <StoreContext.Consumer>{
            (store)=> {
                let state = store.getState().profilePage
                let onClickAddPost = () => {
                    let action=addPostAC()
                    store.dispatch(action)
                }

                const onChangeTextHandler = (text:string) => {
                    let action = onChangeTextHandlerAC(text)
                    store.dispatch(action)
                }
                return(
                    <MyPosts onClickAddPost={onClickAddPost} onChangeTextHandler={onChangeTextHandler} state={state}/>
                )
            }
        }
        </StoreContext.Consumer>
    )
}

