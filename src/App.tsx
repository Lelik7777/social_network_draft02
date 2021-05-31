import React from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Profile} from './Components/Profile';
import {StateType} from './Components/Store';

type AppType = {
    data: StateType;
    addPost: () => void;
    onChange:(s:string)=>void;
    textInput:string;
}
const App: React.FC<AppType> = ({data, addPost,onChange,textInput}) => {
    return <div className={s.app}>
        <Header title={'social network'}/>
        <Sidebar/>
        <div className={s.wrapper}>
            <Route path={`/profile`} render={() => <Profile
                data={data.profilePage}
                addPost={addPost}
                onChange={onChange}
                textInput={textInput}
            />}
            />
        </div>
    </div>
}


export default App;

