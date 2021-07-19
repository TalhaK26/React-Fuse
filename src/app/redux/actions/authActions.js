import { REGISTER_SUCCESS } from '../types/authTypes';

export const setUser = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data
    }
}