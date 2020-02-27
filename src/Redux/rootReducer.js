import { combineReducers } from 'redux';
import user from './userReducer';
import senators from './senatorsReducer';

export default combineReducers({
  user,
  senators
});
