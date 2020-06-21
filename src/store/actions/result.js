import * as actionsTypes from './actionsTypes'

export const saveResult = (result) => {
    // const updatedResult = result * 2;
    return {
      type: actionsTypes.STORE_RESULT,
      result: result,
    };
  };
  export const store_result = (result) => {
    return (dispatch, getState) => {
      setTimeout(() => {
        //   const oldCounter = getState().ctr.counter
        //   console.log('old Counter', oldCounter)
        dispatch(saveResult(result));
      }, 2000);
    }
  
  //   return {
  //     type: STORE_RESULT,
      // result: result,
  //   };
  }
  
  export const delete_result = (id) => {
    return {
      type: actionsTypes.DELETE_RESULT,
      resultElId: id,
    };
  };
  