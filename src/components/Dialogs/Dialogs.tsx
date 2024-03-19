import React from 'react';
import s from "./Dialogs.module.css"

import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export const Dialogs = () => {


    let dialogs = [
        {id: 1, name: "Dima"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "What is your name?"},
        {id: 4, name: "Sasha"},
    ]
    let messages = [
        {id: 1, message: "Hello"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Hello"},
        {id: 4, message: "Hello. I am fine."},
    ]
    let dialogsElements = dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message title={m.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

