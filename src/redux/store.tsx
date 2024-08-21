import { composeWithDevTools } from "redux-devtools-extension";
import RootReducer from "./reducer/RootReducer";
import { createStore } from 'redux';


const store = createStore(
    RootReducer,
    composeWithDevTools(),
);

export default store