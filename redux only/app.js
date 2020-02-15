const { createStore } = require('redux');

const intialState = {
    age: 30
}

const myReducer = (state = intialState, action) => {
    const newState = { ...state };

    if( action.type === 'ADD') {
        newState.age += 1;
    }
    
    return newState;
}

const store = createStore(myReducer);

store.dispatch({ type: 'ADD' });

console.log(store.getState());