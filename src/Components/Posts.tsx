import React, {ChangeEvent} from 'react';
import s from '../App.module.css';
import {Post} from './Post';
import {ActionType, AddPostType, ProfilePageType} from './Store';

type PostsType = {
    data: ProfilePageType
    dispatch: (a: ActionType) => void;
    textTextarea: string;
}
export const Posts: React.FC<PostsType> = ({data, dispatch, textTextarea}) => {
    const action1:ActionType={type:'ADD-POST'};
   //const action2:ActionType={type:'ON-CHANGE-TEXT',textNew:e.currentTarget.value};
    const renderPosts = data.posts.map(d => <Post key={d.id} id={d.id} title={d.title} like={d.like}/>);
    const addPostOnClick = () => dispatch(action1);
    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch({type:'ON-CHANGE-TEXT',textNew:e.currentTarget.value});
    return <div className={s.posts}>
        <h2 style={{color: 'rgba(115, 115, 115, 0.4)', textShadow: '1.5px 2px rgba(63, 53, 44, 0.7)'}}>My posts:</h2>
        <textarea rows={3} cols={50} value={textTextarea} onChange={onChangeTextarea}/>
        <button onClick={addPostOnClick}>add</button>
        {renderPosts}
    </div>
}
