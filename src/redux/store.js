import {combineReducers, createStore} from "redux";
import {reducerTwist} from "./reducerTwist";
import {settingReducer} from "./settingReducer";


let reducers = combineReducers({
    settings: settingReducer,
    twist: reducerTwist
});

const store = createStore(reducers);

export default store;