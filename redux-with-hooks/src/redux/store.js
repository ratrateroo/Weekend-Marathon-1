import { createStore } from 'redux';
import uuid from 'uuid/v4';
import reducer from './reducer/reducer';

const initialState = {
    todos: [
      {
        id: uuid(),
        name: 'Go to the mall',
        complete: false
      },
      {
        id: uuid(),
        name: 'Do coding',
        complete: true
      }
    ]
  };

export default store = createStore(reducer);