import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id='1' name='Dimych'/>
                <DialogItem id='2' name='Andrey'/>
                <DialogItem id='3' name='Sveta'/>
                <DialogItem id='4' name='Sasha'/>
                <DialogItem id='5' name='Victor'/>
                <DialogItem id='6' name='Valera'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi!'/>
                <Message message='How is it-kamasutra?'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
                <Message message='Yo!'/>
            </div>
        </div>
    )
}

export default Dialogs;