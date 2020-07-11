import React from "react";
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://vokrug.tv/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg"/>
            post 1
            <div>
                <span>
                Like
                </span>
            </div>

        </div>

    )
}

export default Post;