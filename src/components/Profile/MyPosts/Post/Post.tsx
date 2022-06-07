import React from "react";
import classes from "./Post.module.css"

type firstType = {
    first: string
}
type propsType = {
    comm: firstType
}

export let Post:React.FC<propsType> = (props) => {
    return (
        <div className={classes.post}>
            <span className={classes.ava}><img
                src="https://demiart.ru/forum/journal_uploads13/j2406363_1591724080_0.jpg"
                alt="As soon as"/></span>
            <span>{props.comm.first}</span>
            <div>
                <button className={classes.like}>
                    <img src="https://www.meme-arsenal.com/memes/68c19396f4aba13dc12aeffd7b7698b4.jpg"
                         alt="Like here!"/>
                </button>
            </div>
        </div>
    )
}