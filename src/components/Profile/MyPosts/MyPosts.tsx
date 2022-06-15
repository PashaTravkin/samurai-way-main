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
            {postData.map(p=><Post id ={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

