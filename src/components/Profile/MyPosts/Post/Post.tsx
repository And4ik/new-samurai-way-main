import React from 'react';
import s from "./Post.module.css"
type PostType = {
    messages: string
    like: number
}
export const Post: React.FC<PostType> = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg" alt=""/>
                {props.messages}
                <div><span>like {props.like}</span></div>
            </div>
        </div>
    );
};

