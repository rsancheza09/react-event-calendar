import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import week from './week';

export default combineReducers({
  routing: routerReducer,
  week,
});
