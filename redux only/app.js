const { createStore } = require('redux');

const intialState = {
    age: 30
}

const myReducer = (state = intialState, action) => {
    const newState = { ...state };

    if( action.type === 'ADD') {
        newState.age += action.payload;
    }
    if( action.type === 'SUBTRACT') {
        newState.age -= action.payload;
    }
    
    return newState;
}

const store = createStore(myReducer);

store.subscribe(() => {
    console.log('The store has changed: ' + JSON.stringify(store.getState()));
});

console.log(store.getState());
store.dispatch({ type: 'ADD' , payload: 10 });
store.dispatch({ type: 'SUBTRACT' , payload: 5 });
console.log(store.getState());