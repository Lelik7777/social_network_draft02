import React from 'react';
import s from '../App.module.css';

type PostType = {}
export const Post: React.FC<PostType> = ({}) => {
    return <div className={s.post}>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda aut consequuntur cupiditate distinctio enim est eveniet itaque molestiae nemo, odio placeat praesentium qui quod repudiandae, tempore. Autem eaque ratione tenetur!
    </div>
}