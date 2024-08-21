import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import { RootReducer } from "./reducer/RootReducer";


const store = createStore(
    RootReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store