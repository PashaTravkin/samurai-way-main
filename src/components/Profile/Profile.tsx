import React from "react";
import classes from "./Profile.module.css"
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsType, MyPostPropsType} from "../../Redux/State";


export type ProfilePropsType={
    newText:string
    postsData:Array<MyPostPropsType>
    dispatch: (action:ActionsType)=>void
}

export let Profile:React.FC<ProfilePropsType> = (props) => {
    return (
        < div className={classes.content}>
            <div className={classes.mainImgInContent}><img
                src="https://besthqwallpapers.com/Uploads/31-3-2021/160338/thumb2-social-networks-blue-background-social-networks-icons-blue-light-globe-global-networks.jpg"
                alt=""/></div>
            <div className={classes.workingArea}>
                <ProfileInfo/>
                <MyPosts newText = {props.newText}
                         postsData={props.postsData}
                         dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

