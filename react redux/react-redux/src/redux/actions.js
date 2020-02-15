import { AGE_UP, AGE_DOWN } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = content => ({
  type: AGE_UP,
  payload: 1
});

export const toggleTodo = id => ({
  type: AGE_DOWN,
  payload: 1
});