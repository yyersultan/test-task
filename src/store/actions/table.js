import axios from "axios";

export const SET_LOADING = 'SET_LOADING';
export const SET_LOANS = 'SET_LOANS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_ORDER_BY = 'SET_ORDER_BY';
export const SET_FILTER_ITEM = 'SET_FILTER_ITEM';

export const setLoading =(loading) => {
    return {
        type: SET_LOADING,
        payload: loading
    }
}

export const setLoansAc = (loans) => {
    return {
        type: SET_LOANS,
        payload: loans
    }
}
export const setSortByAc = (sortBy) => {
    return {
        type: SET_SORT_BY,
        payload: sortBy
    }
}
export const getLoansData = () => async(dispatch) => {
    try{
        dispatch(setLoading(true));
        const response = await axios.get('./loans.json');
        console.log(response.data);
        dispatch(setLoansAc(response.data));
    }catch(e){
        console.log(e);
    }
}
export const setFilterItem = (payload) => {
    return {
        type: SET_FILTER_ITEM,
        payload
    }
}