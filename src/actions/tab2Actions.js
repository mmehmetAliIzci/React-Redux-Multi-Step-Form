import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function toggleRadioButton(payloads) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    debugger;
    return dispatch({
      type: types.TOGGLE_RADIO_BUTTONS,
      payload: payloads
    });
  };
}