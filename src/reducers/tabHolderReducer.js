import {CHANGE_TABS} from '../constants/actionTypes';


const INITIAL_STATE = {currentTab: ''}

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function tabHolderReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case CHANGE_TABS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return { ...state, currentTab: action.payload };
    default:
      return state;
  }
}
