import {RESET_FORM, UPDATE_FORM} from "./actions";

const initialState = {
    formState: [
        {name: 'From', value: '', error: null, type: 'email'},
        {name: 'To', value: '', error: null, type: 'email'},
        {name: 'Subject', value: '', error: null, type: 'text'},
        {name: 'Message', value: '', error: null, type: 'textarea'}
    ]
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            return {...state, formState: action.formState}
        case RESET_FORM:
            return {...state, formState: [
                    {name: 'From', value: '', error: null, type: 'email'},
                    {name: 'To', value: '', error: null, type: 'email'},
                    {name: 'Subject', value: '', error: null, type: 'text'},
                    {name: 'Message', value: '', error: null, type: 'textarea'}
                ]}
        default: return state
    }
}
