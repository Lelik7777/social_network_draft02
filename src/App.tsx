import React from 'react';
import { Route } from 'react-router-dom';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Profile} from './Components/Profile';


function App() {
    return <div className={s.app}>
        <Header title={'social network'}/>
        <Sidebar/>
        <div className={s.wrapper}>
            <Route path={`/profile`} render={()=><Profile/>}/>
        </div>
    </div>
}

export default App;

