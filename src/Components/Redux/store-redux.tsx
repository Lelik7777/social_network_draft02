import {combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';

export type StoreType = typeof store;
let reducers = combineReducers({
    profilePage: profileReducer,
});
let store = createStore(reducers);
export default store;