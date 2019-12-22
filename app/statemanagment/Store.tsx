import { createStore, combineReducers } from 'redux';
import { reducerNormal } from './redux';
import reducerSaurce from './sauce';

const rootReducer = combineReducers({ reducerNormal, reducerSaurce });
const store = createStore(rootReducer);

export default store;