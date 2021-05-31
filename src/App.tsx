import React from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Profile} from './Components/Profile';
import {StateType} from './Components/Store';

type AppType = {
    data: StateType;
    addPost: (s: string) => void;
}
const App: React.FC<AppType> = ({data, addPost}) => {
    return <div className={s.app}>
        <Header title={'social network'}/>
        <Sidebar/>
        <div className={s.wrapper}>
            <Route path={`/profile`} render={() => <Profile data={data.profilePage} addPost={addPost}/>}/>
        </div>
    </div>
}


export default App;

