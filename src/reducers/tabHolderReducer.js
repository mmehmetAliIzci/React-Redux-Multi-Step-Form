import {CHANGE_TABS} from '../constants/actionTypes';


const INITIAL_STATE = {currentTab: ''}

export default function tabHolderReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case CHANGE_TABS:
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
}
