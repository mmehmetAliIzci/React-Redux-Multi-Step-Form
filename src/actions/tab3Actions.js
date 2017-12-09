import * as types from '../constants/actionTypes';

import { checkIt } from './mockedApi'




/**
 * sendText - Action Creator for 3rd tab's sendText button
 *
 * @param  {String} payloads Text string to be sent to API
 * @return {Promise}  Thennable response from API which will be handled in tab3
 */
export function sendText(payloads) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_TEXT,
      payload: checkIt(payloads)
    });
  };
}


/**
 * sendTextSuccess - Action Creator if 3rd tab's sendText is Successfull
 *
 * @param  {String} savedText SavedText
 * @return {function}
 */
export function sendTextSuccess(savedText) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_TEXT_SUCCESS,
      payload: savedText
    });
  };
}

/**
 * sendTextFailure - Action Creator if 3rd tab's sendText is not Successfull
 *
 * @param  {String} error Error response
 * @return {function}
 */
export function sendTextFailure(error) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_TEXT_FAIL,
      payload: error
    });
  };
}
