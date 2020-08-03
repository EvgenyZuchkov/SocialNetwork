import React from "react";
import s from './MyPosts.module.css';
import Post from "./MyPost/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post id={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <div>
                <h3>MyPosts</h3>
            </div>
            <div>
                <textarea ref={newPostElement} cols="40" rows="5"></textarea>
            </div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;