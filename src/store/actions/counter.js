import * as actionsTypes from './actionsTypes'
export const increment = () => {
    return {
      type: actionsTypes.INCREMENT,
    };
  };
  export const decrement = () => {
    return {
      type: actionsTypes.DECREMENT,
    };
  };
  export const add = (value) => {
    return {
      type: actionsTypes.ADD,
      payload: value,
    };
  };
  export const subtract = () => {
    return {
      type: actionsTypes.SUBTRACT,
      payload: 10,
    };
  };