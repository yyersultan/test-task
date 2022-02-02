import axios from "axios";

export const SET_LOANS = 'SET_LOANS';
export const SET_SORT_BY = 'SET_SORT_BY';
export const SET_ORDER_BY = 'SET_ORDER_BY';

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
        const response = await axios.get('./loans.json');
        console.log(response.data);
        dispatch(setLoansAc(response.data));
    }catch(e){
        console.log(e);
    }
}