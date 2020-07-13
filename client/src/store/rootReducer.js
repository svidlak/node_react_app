import {combineReducers} from "redux";
import {messagesReducer} from "./messagesReducer";
import {formReducer} from "./formReducer";

export const rootReducer = combineReducers({
    messages: messagesReducer,
    form: formReducer
})
