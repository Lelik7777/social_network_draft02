import React, {ChangeEvent} from 'react';
import s from '../App.module.css';
import {Post} from './Post';
import {StoreType} from './Redux/store-redux';


type PostsType = {
    data: StoreType;
    onChange: (e: string) => void;
    addPost: () => void;
}
export const Posts: React.FC<PostsType> = ({addPost, onChange, data}) => {
    const renderPosts = data.getState().profilePage.posts.map(d => <Post key={d.id} id={d.id} title={d.title} like={d.like}/>);
    const addPostOnClick = () => addPost();
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => onChange(e.currentTarget.value);
    return <div className={s.posts}>
        <h2 style={{color: 'rgba(115, 115, 115, 0.4)', textShadow: '1.5px 2px rgba(63, 53, 44, 0.7)'}}>My posts:</h2>
        <textarea rows={3} cols={50} value={data.getState().profilePage.newPostText} onChange={onChangeTextarea}/>
        <button onClick={addPostOnClick}>add</button>
        {renderPosts}
    </div>
}
