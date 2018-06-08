import {createStore, combineReducers, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";

// Reducers
import conversationReducer from "./reducers/conversationReducer";

export default createStore(
    combineReducers({
        conversationReducer
    }),
    {},
    applyMiddleware(createLogger())
);  