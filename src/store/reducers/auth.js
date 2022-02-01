import { AUTH_LOGOUT, AUTH_SUCCESS, SET_ERROR, SET_LOADING } from "../actions/auth"

const initalState = {
    isAuth: false,
    username: '',
    isLoading: false,
    error : ''
}

export const authReducer = (state=initalState,action) => {
    switch(action.type){
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.payload,
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                username: action.payload,
                isAuth: true,
                isLoading: false,
                error:''
            }
        case AUTH_LOGOUT:
            return {
                ...state,
                isAuth: false,
                username: '',
            }
        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}