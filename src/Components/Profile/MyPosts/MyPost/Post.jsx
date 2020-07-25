import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src="https://ae01.alicdn.com/kf/HTB1Y0ZZHVXXXXaZXpXXq6xXFXXXE/3.jpg_640x640q70.jpg"/>
            {props.message}
            <div>
                <span>Like</span>
                {props.likesCount}
            </div>

        </div>

    )
}

export default Post;