import {TOGGLE_RADIO_BUTTONS} from '../constants/actionTypes';


const INITIAL_STATE = {selection: {}}


export default function tab2Reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case TOGGLE_RADIO_BUTTONS:
      return { ...state, selection: action.payload };
    default:
      return state;
  }
}
