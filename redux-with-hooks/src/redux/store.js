import { createStore } from 'redux';
import initialState from './reducer/initialState';
import reducer from './reducer/reducer';




const store = createStore(reducer, initialState);

export default store;