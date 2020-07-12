import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg"/>
        </div>
        <div>
            <img className={s.avatar} src="https://html5css.ru/w3images/avatar2.png"/>
        </div>
        <MyPosts/>
    </div>
}

export default Profile;