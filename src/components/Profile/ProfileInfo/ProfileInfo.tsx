import React from 'react';
import s from "./ProfileInfo.module.css"


export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://images.unsplash.com/photo-1699694927472-46a4fcf68973?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

