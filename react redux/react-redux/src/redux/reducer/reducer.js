import { AGE_UP, AGE_DOWN } from "../actionTypes";
const initialState = {
    age: 30
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch (action.type) {
        case AGE_UP: {
            newState.age = newState.age + action.payload;
        }
        break;

        case AGE_DOWN: {
            newState.age--;
        }
        break;

        default: 
            return state;
    }

    return newState;
};

export default reducer;