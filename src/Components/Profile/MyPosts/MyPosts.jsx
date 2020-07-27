import React from "react";
import s from './MyPosts.module.css';
import Post from "./MyPost/Post";

const MyPosts = (props) => {

    let posts = [
        {id: '1', message: 'Hi, how are you?', likesCount: '12'},
        {id: '2', message: "It's my first post", likesCount: '22'},
    ]

    let postsElements = posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;