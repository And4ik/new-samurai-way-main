import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <textarea> </textarea>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post messages={"Yo, how are you?"} like={4}/>
                <Post messages={"It`s my first post"} like={6}/>
            </div>
        </div>
    );
};

