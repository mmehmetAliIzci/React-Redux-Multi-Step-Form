import * as types from '../constants/actionTypes';

import { submitIt } from './mockedApi'



// example of a thunk using the redux-thunk middleware
export function sendFormContent(payloads) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_FORM_CONTENT,
      payload: submitIt(payloads)
    });
  };
}


// example of a thunk using the redux-thunk middleware
export function sendFormContentSuccess(formContent) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SEND_FORM_CONTENT_SUCCESS,
      payload: formContent
    });
  };
}

// example of a thunk using the redux-thunk middleware
export function sendFormContentFailure(error) {

  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SEND_FORM_CONTENT_FAIL,
      payload: error
    });
  };
}
