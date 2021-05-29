import React from 'react';
import s from '../App.module.css';
import {ReactComponent} from '*.svg';

type PostType = {}
export const Post: React.FC<PostType> = ({}) => {
   return <React.Fragment >
       <p className={s.post}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquid, consequatur dicta doloremque eius error
           et eum excepturi fugit minima molestias natus non nostrum pariatur placeat quisquam ullam, voluptate
           voluptatibus.</p>
   </React.Fragment>
}