import React from "react";
import s from './News.module.css'

const News = (props) => {

    let newNewsElements = React.createRef();

    let addNews = () => {
        let text = newNewsElements.current.value;
        alert(text)
    }

    return (
        <div>
            News
            <div>
                <textarea ref={newNewsElements} cols="40" rows="2"></textarea>
                <button onClick={addNews}>Add News</button>
            </div>
        </div>
    );
}

export default News;