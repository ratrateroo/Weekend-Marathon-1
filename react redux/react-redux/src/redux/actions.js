import { AGE_UP, AGE_DOWN } from "./actionTypes";

let nextTodoId = 0;

export const ageUp = () => ({
  type: AGE_UP,
  payload: 1
});

export const ageDown = () => ({
  type: AGE_DOWN,
  payload: 1
});