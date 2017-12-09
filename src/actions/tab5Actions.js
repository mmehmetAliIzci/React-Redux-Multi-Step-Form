import * as types from '../constants/actionTypes';

import { submitIt } from './mockedApi'




/**
 * sendText - Action Creator for 5th tab's submit button
 *
 * @param  {String} payloads Form Data to be sent
 * @return {Promise}  Thennable response from API which will be handled in tab5
 */
export function sendFormContent(payloads) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_FORM_CONTENT,
      payload: submitIt(payloads)
    });
  };
}


/**
 * sendTextSuccess - Action Creator if 5th tab's submit is Successfull
 *
 * @param  {String} savedText SavedText
 * @return {function}
 */
export function sendFormContentSuccess(formContent) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_FORM_CONTENT_SUCCESS,
      payload: formContent
    });
  };
}

/**
 * sendTextFailure - Action Creator if 5th tab's submit is not Successfull
 *
 * @param  {String} error Error response
 * @return {function}
 */
export function sendFormContentFailure(error) {
  return function (dispatch) {
    return dispatch({
      type: types.SEND_FORM_CONTENT_FAIL,
      payload: error
    });
  };
}
