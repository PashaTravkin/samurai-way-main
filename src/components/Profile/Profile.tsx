import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostPropsType} from "../../Redux/ProfileReducer";
import {ActionsType} from "../../Redux/ActionsType";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export let Profile= (props:any) => {
    return (
        < div className={classes.content}>
            <div className={classes.mainImgInContent}><img
                src="https://besthqwallpapers.com/Uploads/31-3-2021/160338/thumb2-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks.jpg"
                alt=""/></div>
            <div className={classes.workingArea}>
                <ProfileInfo/>
                <MyPostsContainer store = {props.store}
                />
            </div>
        </div>
    )
}

