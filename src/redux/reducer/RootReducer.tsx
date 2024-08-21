import { combineReducers } from 'redux';
import SignInReducer from './SignInReducer';

export const RootReducer = combineReducers({
    SignInReducer,
})
export type RootState = ReturnType<typeof RootReducer>
