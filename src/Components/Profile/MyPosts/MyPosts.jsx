import React from "react";
import s from './MyPosts.module.css';
import Post from "./MyPost/Post";

const MyPosts = (props) => {

    let postsData = [
        {id: '1', message: 'Hi, how are you?', likesCount: '12'},
        {id: '2', message: "It's my first post", likesCount: '22'},
    ]

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>MyPosts</h3>
            </div>
            <div>
                <textarea id="" cols="40" rows="5"></textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post id={postsData[0].id} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post id={postsData[1].id} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts;