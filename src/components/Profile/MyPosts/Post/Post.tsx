import React from "react";
import s from './Post.module.css'

const Post = (props: any) => {
    return (
        <div className={s.item}><img
            src={"https://www.elarraydejota.com/wp-content/uploads/2016/09/Linux-Avatar-300px.png"}/>{props.message}
            <div>
                <span>Like</span> {props.LikesCount}
            </div>
        </div>
    );
}

export default Post

