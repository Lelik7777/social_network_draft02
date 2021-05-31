import React from 'react';
import s from '../App.module.css';
import {Posts} from './Posts';
import {ProfilePageType} from './Store';

type ProfileType = {
    data: ProfilePageType;
    addPost: () => void;
    onChange:(s:string)=>void;
    textInput:string;
}
export const Profile: React.FC<ProfileType> = ({data, addPost,onChange,textInput}) => {
    return <div className={s.profile}>
        <div className={s.img}>
            <img
                src="https://komarik.co/wp-content/uploads/2012/02/Multiplikacionnyy-serial-Bolek-i-Lyolek-720x430.jpg"
                alt=""/>
        </div>
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src="https://i1.sndcdn.com/artworks-nlGD13ewyDPJIK7e-T8gAJQ-t500x500.jpg" alt=""/>
                <div style={{paddingLeft: '20px', fontSize: 'larger', color: 'blue', fontFamily: 'fantasy'}}>Lelik Jan
                </div>
            </div>
            <Posts data={data} addPost={addPost} onChange={onChange} textInput={textInput}/>
        </div>
    </div>
}
