import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType, state} from "../../../redux/state";

type MyPostPropsType = {
    addPostCallBack:(message:string) => void
    updateNewPostText:(message:string) => void
}


const MyPosts = (props: any) => {
    let postsElements =
        state.profilePage.posts.map(p => <Post message={p.post} LikesCount={p.LikesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPostCallBack();
        }

    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text)
    }

    return (<div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement}value={props.newPostText}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts
