import axios from "axios";

export const SET_LOADING_TABLE = 'SET_LOADING_TABLE';
export const SET_LOANS = 'SET_LOANS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_ORDER_BY = 'SET_ORDER_BY';
export const SET_FILTER_ITEM = 'SET_FILTER_ITEM';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const setLoading =(loading) => {
    return {
        type: SET_LOADING_TABLE,
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
export const clearFilters = () => {
    return {
        type: CLEAR_FILTERS
    }
}