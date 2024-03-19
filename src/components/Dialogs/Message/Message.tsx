import React from 'react';
import s from "./../Dialogs.module.css"


type messagesType = {
    title: string
}


export const Message = (props: messagesType) => {
    return (
        <div className={s.message}>{props.title}</div>
    )
}

