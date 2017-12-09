import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import tabHolder from './tabHolderReducer';
import tab1 from './tab1Reducer';
import tab2 from './tab2Reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  tabHolder,
  routing: routerReducer
});

export default rootReducer;
