import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div><img
                src={"https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg"}/>
            </div>
            <div>
                ava+discriptiom
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;