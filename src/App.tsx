import React from 'react';
import {Route} from 'react-router-dom';
import s from './App.module.css';
import {Header} from './Components/Header';
import {Sidebar} from './Components/Sidebar';
import {Profile} from './Components/Profile';
import {StoreType} from './Components/Redux/store-redux';


type AppType = {
    data: StoreType;
}
const App: React.FC<AppType> = ({data}) => {
    return <div className={s.app}>
        <Header title={'social network'}/>
        <Sidebar/>
        <div className={s.wrapper}>
            <Route path={`/profile`} render={() =>
                <Profile
                    data={data}

                />}
            />
        </div>
    </div>
}


export default App;

