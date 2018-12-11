import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_START, 
    LOGIN_USER_SUCCESS, 
    LOGIN_USER_ERROR } from '../actions/types';

const INITIAL_STATE = { 
    email: '',
    password: '', 
    user: {},
    error: '',
    loading: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER_START:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, user: action.payload, loading: false, error: '' };
        case LOGIN_USER_ERROR:
            return { ...state, error: 'Authentication Failed', loading: false };
        default:
            return state;
    }
};
