import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import tabHolder from './tabHolderReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  tabHolder,
  routing: routerReducer
});

export default rootReducer;
