import React from "react";
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img className={s.dialogAvatar} src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg"/>
            <NavLink to={'/dialogs/' + path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;