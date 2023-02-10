import React from "react";
import s from './ProfileInfo.module.css'


 export const ProfileInfo = () => {
    return (
        <div >
            <div><img
                src={"https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg"}/>
            </div>
            <div className={s.descriptionBlock}>
                ava+discription
            </div>
        </div>
    );
}