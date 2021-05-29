import React from 'react';
import s from '../App.module.css';

type HeaderType = {
    title: string;
}
export const Header: React.FC<HeaderType> = ({title}) => {
    return <div className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjOaQ0JgvZ3guTmPu_yg-VMznLOH2dar1lWA&usqp=CAU" alt="logo"/>
        <h2>{title}</h2>
    </div>
}
