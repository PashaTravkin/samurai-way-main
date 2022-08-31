import React, {ChangeEvent} from "react";
import {Post} from "./Post/Post";
import {MyPostsContainerPropsType} from "./MyPostsContainer";

export class MyPosts extends React.Component<MyPostsContainerPropsType>{

    onClickAddPost = () => {
        this.props.onClickAddPost()
    }

   onChangeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        this.props.onChangeTextHandler(text)
    }
render(){
    return (
        <div>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea value={this.props.profilePage.newText} onChange={this.onChangeTextHandler} name="posts" id="1"></textarea>
                </div>
                <div>
                    <button onClick={this.onClickAddPost}>Send post</button>
                </div>
            </div>
            {this.props.profilePage.postsData.map(p => <Post id={p.id} postData={p.message} likesCount={p.likesCount}/>)}
        </div>
    )
}

}

