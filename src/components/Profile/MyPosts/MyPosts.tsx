import React from "react";
import {Post} from "./Post/Post";

export type objectType = {
    first:string
}
const communication =[
    {first:"Hello, how are you?"},
    {first:' What\'s your name?'}
]

export let MyPosts = () => {


    return (
        <div>
            <div>My post</div>
            <div>
                <textarea/>
                <button>Send post</button>
            </div>
            <Post comm = {communication}/>
            <Post comm = {communication}/>
        </div>
    )
}

