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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},
    ]

    let messagesData = [
        {id: 1, message: 'Hi!'},
        {id: 1, message: 'How is it-kamasutra?'},
        {id: 1, message: 'Yo!'},
        {id: 1, message: 'Yo!'},
        {id: 1, message: 'Yo!'},
        {id: 1, message: 'Yo!'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItem id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItem id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItem id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItem id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItem id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={s.messages}>
                <Message id={messagesData[0].id} message={messagesData[0].message}/>
                <Message id={messagesData[1].id} message={messagesData[1].message}/>
                <Message id={messagesData[2].id} message={messagesData[2].message}/>
                <Message id={messagesData[3].id} message={messagesData[3].message}/>
                <Message id={messagesData[4].id} message={messagesData[4].message}/>
                <Message id={messagesData[5].id} message={messagesData[5].message}/>

            </div>
        </div>
    )
}

export default Dialogs;