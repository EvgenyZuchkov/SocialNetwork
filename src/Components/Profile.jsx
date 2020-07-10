import React from "react";
import './Profile.css';

const Profile = () => {
    return <div className='content'>
        <div>
            <img src="https://jssors8.azureedge.net/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg" alt=""/>
        </div>
        <div>
            <img src="https://html5css.ru/w3images/avatar2.png" alt=""/>
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div>
                <div>post 1</div>
                <div>post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;