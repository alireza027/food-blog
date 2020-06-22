import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import {AllPostThunk} from './yummy/yummyThunk';
import {yummyReducer} from './yummy/reducer'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(yummyReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
// store.subscribe(() => console.log("updating state", store.getState()));
store.dispatch(AllPostThunk());
export default store;
