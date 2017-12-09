import * as types from '../constants/actionTypes';

/**
 * selectFromDropDown - Action creator for 4th tab's dropdown selection
 *
 * @param  {String} payloads Dropdown option
 * @return {function}
 */
export function selectFromDropDown(payloads) {
  return function (dispatch) {
    return dispatch({
      type: types.SELECT_FROM_DROPDOWN,
      payload: payloads
    });
  };
}
