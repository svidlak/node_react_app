import {ASYNC_CREATE_MESSAGE, ASYNC_GET_MESSAGES} from "./actions";

const initialState = {
    messagesState: [],
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ASYNC_CREATE_MESSAGE:
            const messages = {...state}
            messages.messagesState.unshift(action.new_message)
            return {...state, ...messages }
        case ASYNC_GET_MESSAGES:
            return {...state, messagesState: action.messages.reverse()}
        default: return state;
    }
}
