import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {MyPostsContainerPropsType} from "./MyPostsContainer";

export let MyPosts = (props:MyPostsContainerPropsType) => {

    let onClickAddPost = () => {
        props.onClickAddPost()
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    debugger
        let text = e.currentTarget.value
        props.onChangeTextHandler(text)
    }

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.profilePage.newText} onChange={onChangeTextHandler} name="posts" id="1"></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Send post</button>
                </div>
            </div>
            {props.profilePage.postsData.map(p => <Post id={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

