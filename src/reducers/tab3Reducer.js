import {SEND_TEXT,SEND_TEXT_SUCCESS,SEND_TEXT_FAIL} from '../constants/actionTypes';


const INITIAL_STATE = {savedText: '', error: null, loading:null}

export default function tab3Reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case SEND_TEXT:
      return { ...state, savedText: '', error: null, loading: true };
    case SEND_TEXT_SUCCESS:
      return { ...state, savedText: action.payload, loading: false };
    case SEND_TEXT_FAIL:
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}
