import React from 'react';
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type dialogsType = {
    id: string
    name: string
}
type messagesType = {
    title: string
}
export const Dialogs = () => {
    const Messages = (props:messagesType) => {
        return (
            <div className={s.message}>{props.title}</div>
        )
    }
    const DialogsItem = (props:dialogsType) => {
        return (
            <div className={s.dialog}><NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink></div>
        )
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <DialogsItem name = "Dimych" id = "1"/>
                <DialogsItem name = "Andrey" id = "2"/>
                <DialogsItem name = "Yuliya" id = "3"/>
                <DialogsItem name = "Sasha" id = "4"/>
            </div>
            <div className={s.messages}>
                <Messages title = "Hello"/>
                <Messages title = "How are you?"/>
                <Messages title = "What is your name?"/>
                <Messages title = "Hello. I am fine."/>
            </div>
        </div>
    );
};

