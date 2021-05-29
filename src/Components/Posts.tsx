import React from 'react';
import s from '../App.module.css';
import {Post} from './Post';

type PostsType = {}
export const Posts: React.FC<PostsType> = ({}) => {
    return <div className={s.posts}>
        <h4>My posts</h4>
        <input type="text" value={`new post`}/>
        <button>add</button>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </div>
}
