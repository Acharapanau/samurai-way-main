import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props:any) => {

    let postData = [
        {id: 1, post: 'Hi, how are you?',LikesCount:12},
        {id: 2, post: 'Its my first post',LikesCount: 11},]

    return (<div className={s.postsBlock}>
           <h3> My posts</h3>
            <div>
                <div><textarea></textarea></div>
               <div><button>Add post</button></div>
            </div>
            <div className={s.posts}>
               <Post message={postData[0].post} LikesCount={postData[0].LikesCount}/>
                <Post message={postData[1].post} LikesCount={postData[1].LikesCount}/>

            </div>
        </div>
    );
}

export default MyPosts
