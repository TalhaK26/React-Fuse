import { LOGIN_SUCCESS } from '../types/authTypes';

export const setUser = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}