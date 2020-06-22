import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerTwist} from "./reducerTwist";
import {settingReducer} from "./settingReducer";
import thunkMiddleware from "redux-thunk";



let reducers = combineReducers({
    settings: settingReducer,
    twist: reducerTwist
});

export type AppStateType = ReturnType< typeof reducers>

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;