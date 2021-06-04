import React from 'react';
import s from '../App.module.css';
import {StoreType} from './Redux/store-redux';
import {PostsContainer} from './PostsContainer';


type ProfileType = {

}
export const Profile: React.FC<ProfileType> = ({}) => {
    return <div className={s.profile}>
        <div className={s.img}>
            <img
                src="https://komarik.co/wp-content/uploads/2012/02/Multiplikacionnyy-serial-Bolek-i-Lyolek-720x430.jpg"
                alt="lolka and bolka"
            />
        </div>
        <div className={s.wrapper}>
            <div className={s.ava}>
                <img src="https://i1.sndcdn.com/artworks-nlGD13ewyDPJIK7e-T8gAJQ-t500x500.jpg" alt="lelik"/>
                <div style={{
                    paddingLeft: '20px', fontSize: 'x-large', color: 'rgba(24, 35, 191, 0.8)', fontFamily: 'Algerian',
                    textShadow: '1px 1px rgba(24, 35, 191, 0.6)', letterSpacing: '0.1em'
                }}>
                    Lelik Jan
                </div>
            </div>
            <PostsContainer/>
        </div>
    </div>
}
