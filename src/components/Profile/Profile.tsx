import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, dialogsPageType, PostType, profilePageType, RootStateType, updateNewPostText} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPostCallBack:(message:string) => void

    updateNewPostText:(message:string) => void
}

 const Profile = (props:ProfilePropsType) => {
    return (
        <div className="">
            <ProfileInfo/>
            <MyPosts updateNewPostText={updateNewPostText}  newPostText={props.profilePage.newPostText} posts={props.profilePage.posts} addPostCallBack={addPost}/>
        </div>
    );
}

export default Profile;