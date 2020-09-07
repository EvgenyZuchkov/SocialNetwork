import React from "react";
import s from "./../Dialogs.module.css"

const Message = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }

    return (
        <div className={s.dialog}>
            {props.message}
            <img className={s.messageAvatar} src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>
        </div>

    )
}

export default Message;