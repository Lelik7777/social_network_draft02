import React from 'react';
import s from '../App.module.css';
import {Post} from './Post';
import {ProfilePageType} from './Store';

type PostsType = {
    data: ProfilePageType
    addPost: (s: string) => void;
}
export const Posts: React.FC<PostsType> = ({data, addPost}) => {
    const renderPosts = data.posts.map(d => <Post key={d.id} id={d.id} title={d.title} like={d.like}/>);
    const valueInput = React.createRef<HTMLInputElement>();
    const addPostOnClick = () => {
       debugger
        if (valueInput.current)
            addPost(valueInput.current?.value);
    };
    return <div className={s.posts}>
        <h4>My posts</h4>
        <input type="text" value={`new post`} ref={valueInput}/>
        <button onClick={addPostOnClick}>add</button>
        {renderPosts}
    </div>
}
