import {combineReducers} from 'redux';
import reducer from './action-reducer';
import loginReducer from './loginReducer';
import addProductReducer from './addProductReducer';
const reducers=combineReducers({
reducer, loginReducer, addProductReducer

})
export default reducers