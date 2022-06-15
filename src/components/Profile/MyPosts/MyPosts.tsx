import React from "react";
import {Post} from "./Post/Post";
import {ProfilePropsType} from "../Profile";


export let MyPosts:React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Send post</button>
                </div>
            </div>
            {props.postsData.map(p => <Post id={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

