import { REGISTER_SUCCESS } from '../types/authTypes';

const initialState = {
    isAuthenticated: false,
    token: localStorage.getItem('token'),
    user: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.auth_token);
            return {
                ...state,
                user: action.payload,
                // token: action.payload.auth_token,
                isAuthenticated: true,
            }

        default: 
        return state;
    }
}

export default authReducer;