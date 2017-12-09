import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import tabHolder from './tabHolderReducer';
import tab1 from './tab1Reducer';
import tab2 from './tab2Reducer';
import tab3 from './tab3Reducer';
import tab4 from './tab4Reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  fuelSavings,
  tabHolder,
  tab1,
  tab2,
  tab3,
  routing: routerReducer
});

export default rootReducer;
