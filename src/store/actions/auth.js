import axios from "axios";

export const SET_LOADING = 'SET_LOADING';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';
export const  SET_ERROR = 'SET_ERROR';

export const setIsLoading = (loading) => {
    return {
        type : SET_LOADING,
        payload : loading
    }
}
export const setAuth = (username) => {
    return {
        type: AUTH_SUCCESS,
        payload : username
    }
}

export const setError = (error) => {
    return {
        type : SET_ERROR,
        payload: error
    }
}

export const login = (username,password) => async(dispatch) => {
    try{
        dispatch(setIsLoading(true));
        setTimeout(async () => {
            const response = await axios.get('./users.json');
            const isUser = response.data.find(user => user.username === username && user.password === password);
            if(isUser) {
                localStorage.setItem('isAuth',true);
                localStorage.setItem('username',username);
                dispatch(setAuth(isUser.username));
                console.log('YES user exists');
            }else{
                dispatch(setError('Username or Password Incorrect'));
                console.log('User no');
            }
        },1000);
    }catch(e){
        console.log(e);
    }
}

export const logout = () => async(dispatch) => {
    localStorage.removeItem('isAuth');
    localStorage.removeItem('username');
    dispatch({type:AUTH_LOGOUT})
} 