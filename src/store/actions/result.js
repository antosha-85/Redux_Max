import * as actionsTypes from './actionsTypes'

export const saveResult = (result) => {
    return {
      type: actionsTypes.STORE_RESULT,
      result: result,
    };
  };
  export const store_result = (result) => {
    return (dispatch) => {
      setTimeout(() => {
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
  