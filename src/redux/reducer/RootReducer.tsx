import { combineReducers } from 'redux';
import SignInReducer from './SignInReducer';

const RootReducer = combineReducers({
    SignInReducer,
})

export default RootReducer;