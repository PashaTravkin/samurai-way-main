import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {ProfilePropsType} from "../Profile";
import {addPostAC, onChangeTextHandlerAC} from "../../../Redux/State";


export let MyPosts: React.FC<ProfilePropsType> = (props) => {

    let onClickAddPost = () => {
        let action=addPostAC()
        props.dispatch(action)
    }

    const onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        let action = onChangeTextHandlerAC(text)
        props.dispatch(action)
    }

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={props.newText} onChange={onChangeTextHandler} name="posts" id="1"></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Send post</button>
                </div>
            </div>
            {props.postsData.map(p => <Post id={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

