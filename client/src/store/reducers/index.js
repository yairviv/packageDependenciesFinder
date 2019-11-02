import { combineReducers } from 'redux';
import packagesReducer from './packagesReducer';

export default combineReducers({
  packages: packagesReducer
})
