import * as types from '../constants/actionTypes';

import { checkIt } from './mockedApi'



// example of a thunk using the redux-thunk middleware
export function sendText(payloads) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_TEXT,
      payload: checkIt(payloads)
    });
  };
}


// example of a thunk using the redux-thunk middleware
export function sendTextSuccess(savedText) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SEND_TEXT_SUCCESS,
      payload: savedText
    });
  };
}

// example of a thunk using the redux-thunk middleware
export function sendTextFailure(error) {

  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SEND_TEXT_FAIL,
      payload: error
    });
  };
}
