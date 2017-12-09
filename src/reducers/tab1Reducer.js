import {TOGGLE_CHECKBOX} from '../constants/actionTypes';


const INITIAL_STATE = {selection: []}

export default function tab1Reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case TOGGLE_CHECKBOX:
      return { ...state, selection: action.selection };
    default:
      return state;
  }
}
