import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props: any) => {

    let posts = [
        {id: 1, post: 'Hi, how are you?', LikesCount: 12},
        {id: 2, post: 'Its my first post', LikesCount: 11},]

    let postsElements = posts.map(p => <Post message={p.post} LikesCount={p.LikesCount}/>)

    return (<div className={s.postsBlock}>
            <h3> My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts
