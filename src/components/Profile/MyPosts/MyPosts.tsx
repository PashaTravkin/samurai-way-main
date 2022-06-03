import React from "react";
import {Post} from "./Post/Post";

export let MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <div>
                <textarea/>
                <button>Send post</button>
            </div>
            <Post />
            <Post />
        </div>
    )
}

