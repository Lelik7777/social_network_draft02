import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../App.module.css';
const links=['Profile','Dialogs','News','Settings'];
type SidebarType = {}
export const Sidebar: React.FC<SidebarType> = ({}) => {
    return <div className={s.sidebar}>
        {links.map(l=><NavLink to={`/${l.toLowerCase()}`}>{l}</NavLink>)}
    </div>
}