import React from 'react';
import s from '../App.module.css';

type HeaderType = {
    title: string;
}
export const Header: React.FC<HeaderType> = ({title}) => {
    return <div className={s.header}>
        <img src="https://prepod24.ru/uploads/avatars/diplomat_Avatar_78a83767-e05a-4125-881c-e1cdec80a66f_%D0%9B%D1%91%D0%BB%D0%B8%D0%BA.jpg"
             alt="logo"
        />
        <h2>{title}</h2>
    </div>
}
