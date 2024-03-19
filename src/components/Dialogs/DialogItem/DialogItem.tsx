import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

type dialogsType = {
    id: number
    name: string
}
export const DialogsItem = (props: dialogsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}
            </NavLink></div>
    )
}

