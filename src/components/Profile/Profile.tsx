import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div><img
                src={"https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg"}/>
            </div>
            <div>
                ava+discription
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;