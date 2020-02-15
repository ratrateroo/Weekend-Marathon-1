import { AGE_UP, AGE_DOWN } from "./actionTypes";



export const ageUp = () => ({
  type: AGE_UP,
  payload: 1
});

export const ageDown = () => ({
  type: AGE_DOWN,
  payload: 1
});