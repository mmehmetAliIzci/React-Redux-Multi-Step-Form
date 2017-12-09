import * as types from '../constants/actionTypes';

/**
 * toggleCheckBox - Action creator for 1st tab's checkbox toggling
 *
 * @param  {Array} selection Array of selection
 * @return {Function}
 */
export function toggleCheckBox(selection) {
  return function (dispatch) {
    return dispatch({
      type: types.TOGGLE_CHECKBOX,
      selection: selection
    });
  };
}
