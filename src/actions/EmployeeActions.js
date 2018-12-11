import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { SAVE_INFO, SAVE_EMPLOYEE, FETCH_EMPLOYEE_SUCCESS } from './types';


export const saveEmployeeInfo = ({ prop, value }) => {
    return {
        type: SAVE_INFO,
        payload: { prop, value }
    };
};

export const saveEmployee = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .push({ name, phone, shift })
        .then(() => {
            dispatch({
                type: SAVE_EMPLOYEE
            });
            Actions.employeeList({ type: 'reset' });
        });
    };
};

export const employeeFetch = () => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees`)
        .on('value', snapshot => {
            dispatch({
                type: FETCH_EMPLOYEE_SUCCESS,
                payload: snapshot.val()
            });
        });
    };
};

export const editEmployee = ({ name, phone, shift, uid }) => {
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .set({ name, phone, shift })
        .then(() => {
            dispatch({
                type: SAVE_EMPLOYEE
            });
            Actions.employeeList({ type: 'reset' });
        });
    };
};

export const deleteEmployee = (uid) => {
    const { currentUser } = firebase.auth();
    return () => {
        firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
        .remove()
        .then(() => {
            Actions.employeeList({ type: 'reset' });
        });
    };
};
