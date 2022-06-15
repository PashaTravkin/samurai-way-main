import React from "react";
import {Post} from "./Post/Post";

const postData = [
    {id: 3, message: "Hello, how are you?", likesCount: 1},
    {id: 4, message: ' What\'s your name?', likesCount: 5}
]

export let MyPosts = () => {

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
            <Post id ={postData[0].id} postData={postData[0].message} likesCount={postData[0].likesCount}/>
            <Post id ={postData[1].id} postData={postData[1].message} likesCount={postData[0].likesCount}/>
        </div>
    )
}

