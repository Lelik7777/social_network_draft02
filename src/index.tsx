import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import store, {StoreType} from './Components/Redux/store-redux';
import StoreContext from './StoreContext';


function rerenderApp(store: StoreType) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <StoreContext.Provider value={store}>
                    <App/>
                </StoreContext.Provider>

            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderApp(store);
store.subscribe(() =>
    rerenderApp(store));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
