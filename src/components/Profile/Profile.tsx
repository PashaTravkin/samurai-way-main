import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostPropsType} from "../../Redux/State";


export type ProfilePropsType={
    postsData:Array<MyPostPropsType>
    addPost:(value:string)=>void
}

export let Profile:React.FC<ProfilePropsType> = (props) => {
    return (
        < div className={classes.content}>
            <div className={classes.mainImgInContent}><img
                src="https://besthqwallpapers.com/Uploads/31-3-2021/160338/thumb2-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks.jpg"
                alt=""/></div>
            <div className={classes.workingArea}>
                <ProfileInfo/>
                <MyPosts addPost ={props.addPost} postsData={props.postsData}/>
            </div>
        </div>
    )
}

