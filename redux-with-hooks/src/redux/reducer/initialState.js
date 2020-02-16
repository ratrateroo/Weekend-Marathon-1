import uuid from 'uuid/v4';
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

export default initialState;