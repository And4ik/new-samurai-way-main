import React from 'react';
import s from "./MyPosts.module.css"
import {Post} from "./Post/Post";

type postsType = {
    id: number
    message: string
    likesCount: number
}

export const MyPosts = () => {
    let posts: Array<postsType> = [
        {id: 1, message: "Yo, how are you?", likesCount: 7},
        {id: 2, message: "It`s my first post", likesCount: 25},
    ]
    let postsElements = posts.map(p => <Post messages={p.message} like={p.likesCount}/>)
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
                {postsElements}
            </div>
        </div>
    );
};

