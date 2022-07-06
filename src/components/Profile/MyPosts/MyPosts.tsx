import React from "react";
import {Post} from "./Post/Post";
import {ProfilePropsType} from "../Profile";


export let MyPosts: React.FC<ProfilePropsType> = (props) => {

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let onClickAddPost = () => {
        if (newPostElement.current){
            props.addPost(newPostElement.current?.value)
        }

    }
    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} name="posts" id="1"></textarea>
                </div>
                <div>
                    <button onClick={onClickAddPost}>Send post</button>
                </div>
            </div>
            {props.postsData.map(p => <Post id={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

