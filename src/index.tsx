import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {store, StoreType} from './Components/Store';


function rerenderApp(store: StoreType) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter><App
                data={store.getState()}
                addPost={store.addPost.bind(store)}
                onChange={store.onChange.bind(store)}
                textInput={store.getState().profilePage.newPostText}
            />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderApp(store);
store.subscribe(rerenderApp);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
