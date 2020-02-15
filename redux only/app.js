const { createStore } = require('redux');

const intialState = {
    age: 30
}

const myReducer = (state = intialState, action) => {
    const newState = { ...state };

    if( action.type === 'ADD') {
        newState.age += 1;
    }
    if( action.type === 'SUBTRACT') {
        newState.age -= 1;
    }
    
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('The store has changed: ' + JSON.stringify(store.getState()));
});

console.log(store.getState());
store.dispatch({ type: 'ADD' });
store.dispatch({ type: 'SUBTRACT' });
console.log(store.getState());