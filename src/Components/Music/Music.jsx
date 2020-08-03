import React from "react";
import s from './Music.module.css'

const Music = (props) => {

    let addTrackElement = React.createRef();

    let addTrack = () => {
        let text = addTrackElement.current.value;
        alert(text)
    }

    return (
        <div>
            Music
            <div>
                <textarea ref={addTrackElement} cols="30" rows="10"></textarea>
                <button onClick={addTrack}>Add track</button>
            </div>
        </div>
    );
}

export default Music;