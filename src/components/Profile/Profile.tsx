import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {addPost, dialogsPageType, PostType, profilePageType, RootStateType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPostCallBack:(message:string) => void
}

 const Profile = (props:ProfilePropsType) => {
    return (
        <div className="">
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPostCallBack={addPost}/>
        </div>
    );
}

export default Profile;