import React, {ChangeEvent} from 'react';
import s from '../App.module.css';
import {Post} from './Post';
import {ProfilePageType} from './Store';

type PostsType = {
    data: ProfilePageType
    addPost: () => void;
    onChange:(s:string)=>void;
    textInput:string;
}
export const Posts: React.FC<PostsType> = ({data, addPost,onChange,textInput}) => {
    const renderPosts = data.posts.map(d => <Post key={d.id} id={d.id} title={d.title} like={d.like}/>);
    const addPostOnClick = () => {
            addPost();
    };
    const onChangeInput=(e:ChangeEvent<HTMLInputElement>)=>{
        onChange(e.currentTarget.value)
    }
    return <div className={s.posts}>
        <h4>My posts</h4>
        <input type="text" value={textInput} onChange={onChangeInput}/>
        <button onClick={addPostOnClick}>add</button>
        {renderPosts}
    </div>
}
