import {CREATE_MESSAGE, ASYNC_CREATE_MESSAGE, GET_MESSAGES, ASYNC_GET_MESSAGES, RESET_FORM} from "../store/actions";
import {all, fork, put, takeLatest} from "@redux-saga/core/effects";
import API_CALLS from "../service/messagesService";

function* async_CREATE_MESSAGE(data){
    try {
        const message = yield API_CALLS.create_message(data)
        yield put({type: ASYNC_CREATE_MESSAGE, new_message: message.data.data})
        yield put({type: RESET_FORM, messages: message.data.data})
    }catch(e){

    }
}

function* async_GET_MESSAGES(){
    try {
        const message = yield API_CALLS.get_all_messages()
        yield put({type: ASYNC_GET_MESSAGES, messages: message.data.data})
    }catch(e){

    }
}

function* WATCH_CREATE_MESSAGE(){
    yield takeLatest(CREATE_MESSAGE, async_CREATE_MESSAGE)
}

function* WATCH_GET_MESSAGES(){
    yield takeLatest(GET_MESSAGES, async_GET_MESSAGES)
}

export default function* root() {
    yield all([
            fork(WATCH_CREATE_MESSAGE),
            fork(WATCH_GET_MESSAGES)
        ])
}
