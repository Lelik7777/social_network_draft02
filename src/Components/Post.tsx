import React from 'react';
import s from '../App.module.css';
import {PostType} from './Redux/profileReducer';



export const Post: React.FC<PostType> = ({id, title, like}) => {
    return <React.Fragment>
        <div className={s.post}>
            <div style={{textIndent: '1em'}}>{title}</div>
            <div className={s.like}>{like}</div>
        </div>
    </React.Fragment>
}