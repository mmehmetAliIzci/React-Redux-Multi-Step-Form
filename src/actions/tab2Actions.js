import * as types from '../constants/actionTypes';

/**
 * toggleRadioButton - Action creator for 2nd tab's radibutton toggling
 *
 * @param  {String} payloads Selected RadioButton's String
 * @return {Function}          description
 */
export function toggleRadioButton(payloads) {
  return function (dispatch) {
    return dispatch({
      type: types.TOGGLE_RADIO_BUTTONS,
      payload: payloads
    });
  };
}
