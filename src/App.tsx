import React from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Profile} from './Components/Profile';
import {ActionType, StateType} from './Components/Store';

type AppType = {
    data: StateType;
    dispatch: (a: ActionType) => void;
    textTextArea: string;
}
const App: React.FC<AppType> = ({data, dispatch, textTextArea}) => {
    return <div className={s.app}>
        <Header title={'social network'}/>
        <Sidebar/>
        <div className={s.wrapper}>
            <Route path={`/profile`} render={() =>
                <Profile
                    data={data.profilePage}
                    dispatch={dispatch}
                    textTextArea={textTextArea}
                />}
            />
        </div>
    </div>
}


export default App;

