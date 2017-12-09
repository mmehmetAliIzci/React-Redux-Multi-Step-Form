import {SEND_FORM_CONTENT,SEND_FORM_CONTENT_SUCCESS,SEND_FORM_CONTENT_FAIL} from '../constants/actionTypes';


const INITIAL_STATE = {sentContent: '', error: null, loading:null}

export default function tab3Reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case SEND_FORM_CONTENT:
    return { ...state, sentContent: '', error: null, loading: true };
    case SEND_FORM_CONTENT_SUCCESS:
    return { ...state, sentContent: action.payload, loading: false };
    case SEND_FORM_CONTENT_FAIL:
    return { ...state, error: action.payload, loading: false };

    default:

      return state;
  }
}
