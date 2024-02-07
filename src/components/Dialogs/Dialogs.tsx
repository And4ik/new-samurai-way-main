import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type dialogsType = {
    id: number
    name: string
}
type messagesType = {
    title: string
}
export const Dialogs = () => {

    const DialogsItem = (props: dialogsType) => {
        return (
            <div className={s.dialog}>
                <NavLink to={"/dialogs/" + props.id}>{props.name}
                </NavLink></div>
        )
    }
    const Messages = (props: messagesType) => {
        return (
            <div className={s.message}>{props.title}</div>
        )
    }
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
    let messagesElements = messages.map(m => <Messages title={m.message}/>)
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

