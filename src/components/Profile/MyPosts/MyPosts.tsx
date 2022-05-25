import React from "react";
import {Post} from "./Post/Post";

export let MyPosts = () => {
    return (
        <div>
            <div>My post</div>
            <div>New post</div>
            <Post />
            <Post />
        </div>
    )
}

