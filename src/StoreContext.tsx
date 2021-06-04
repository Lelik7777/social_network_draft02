import React from 'react';
import store from './Components/Redux/store-redux';

const StoreContext=React.createContext(store);
export default StoreContext;