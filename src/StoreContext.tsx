import React from 'react';
import {StoreType} from './Components/Redux/store-redux';

const StoreContext = React.createContext<StoreType>({} as StoreType);
export default StoreContext;