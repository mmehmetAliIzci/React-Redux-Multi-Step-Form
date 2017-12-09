import {SEND_TEXT,SEND_TEXT_SUCCESS,SEND_TEXT_FAIL} from '../constants/actionTypes';


const INITIAL_STATE = {savedText: '', error: null, loading:null}

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function tab3Reducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case SEND_TEXT:
    debugger;
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
    return { ...state, savedText: '', error: null, loading: true };
    case SEND_TEXT_SUCCESS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
    return { ...state, savedText: action.payload, loading: false };
    case SEND_TEXT_FAIL:
    debugger;
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
    return { ...state, error: action.payload, loading: false };

    default:

      return state;
  }
}
