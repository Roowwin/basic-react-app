//Root Reducer
import { combineReducers } from 'redux';

import adReducer from './sections/adReducer';
import articleReducer from './sections/articleReducer';



export default combineReducers({
  ad:adReducer,
  article:articleReducer,

});
