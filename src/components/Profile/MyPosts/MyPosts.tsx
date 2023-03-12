import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {state} from "../../../redux/state";


const MyPosts = (props: any) => {
    let postsElements =
        state.profilePage.posts.map(p => <Post message={p.post} LikesCount={p.LikesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
       alert(newPostElement.current?.value)
    }

    return (<div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
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
