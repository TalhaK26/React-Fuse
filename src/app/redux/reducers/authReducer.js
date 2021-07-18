import { LOGIN_SUCCESS } from '../types/authTypes';

const initialState = {
    isAuthenticated: false,
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            }

        default: 
        return state;
    }
}

export default authReducer;