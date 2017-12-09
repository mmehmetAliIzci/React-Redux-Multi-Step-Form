import * as types from '../constants/actionTypes';



// example of a thunk using the redux-thunk middleware
export function toggleCheckBox(selection) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.TOGGLE_CHECKBOX,
      selection: selection
    });
  };
}

// example of a thunk using the redux-thunk middleware
export function deSelectCheckBox(payloads) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.CHANGE_TABS,
      payload: payloads
    });
  };
}
