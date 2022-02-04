import { AUTH_LOGOUT, SET_ERROR, SET_IS_AUTH, SET_LOADING, SET_USERNAME } from "../actions/auth"

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
        case SET_IS_AUTH:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false,
                error:''
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
                isLoading: false,
                error: ''
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