import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <Post messages={"Yo, how are you?"} like={4}/>
                    <Post messages={"It`s my first post"} like={ 6}/>
                </div>
            </div>
    );
};

