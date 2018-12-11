import { SAVE_INFO, SAVE_EMPLOYEE } from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SAVE_INFO: 
            return { ...state, [action.payload.prop]: action.payload.value };
        case SAVE_EMPLOYEE:
            return INITIAL_STATE;
        default: return state;
    }
};
