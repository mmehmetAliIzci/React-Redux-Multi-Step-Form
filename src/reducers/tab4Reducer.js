import {SELECT_FROM_DROPDOWN} from '../constants/actionTypes';


const INITIAL_STATE = {selection: "*"}

export default function tab4Reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case SELECT_FROM_DROPDOWN:
      return { ...state, selection: action.payload };
    default:
      return state;
  }
}
