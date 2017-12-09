import * as types from '../constants/actionTypes';




/**
 * changeTab - Responsible for changing Tabs
 *
 * @param  {int} tabNumber TabNumber to Go
 * @return {function}
 */
export function changeTab(tabNumber) {
  return function (dispatch) {
    return dispatch({
      type: types.CHANGE_TABS,
      payload: tabNumber
    });
  };
}
