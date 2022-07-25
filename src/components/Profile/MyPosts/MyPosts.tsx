import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {profilePageType} from "../../../Redux/ProfileReducer";

type MyPostsPropsType = {
    onClickAddPost: () => void
    onChangeTextHandler: (text: string) => void
    state: profilePageType
}

export let MyPosts: React.FC<MyPostsPropsType> = (props) => {
debugger

    let onClickAddPost = () => {
        props.onClickAddPost()
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    debugger
        // let text = e.currentTarget.value
        props.onChangeTextHandler(e.currentTarget.value)
    }

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.state.newText} onChange={onChangeTextHandler} name="posts" id="1"></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Send post</button>
                </div>
            </div>
            {props.state.postsData.map(p => <Post id={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

