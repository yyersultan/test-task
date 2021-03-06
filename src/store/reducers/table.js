import { CLEAR_FILTERS, SET_FILTER_ITEM, SET_LOADING_TABLE, SET_LOANS, SET_SORT_BY } from "../actions/table";

const initalState = {
    isLoading: false,
    loans: {},
    loans_save: {},
    sortByObj:{sortBy: 'id',orderBy:'asc'},
    filters: {
        subsidiary: [],
        compony: [],
        segment: [],
        status: [],
        in_work:[]
    }
}

export const tableReducer = (state=initalState,action) => {
    switch(action.type){
        case SET_LOADING_TABLE:
            return {
                ...state,
                isLoading: action.payload
            }
        case SET_LOANS:
            return{
                ...state,
                loans_save: action.payload,
                loans: action.payload,
                isLoading: false
            }
        case SET_SORT_BY:
            const loans = compare({...state.loans},
            action.payload.sortBy,action.payload.orderBy);
            return {
                ...state,
                loans,
                sortByObj:action.payload
            }
        case CLEAR_FILTERS:
            return {
                ...state,
                filters : {
                    subsidiary: [],
                    compony: [],
                    segment: [],
                    status: [],
                    in_work:[]
                }
            }
        case SET_FILTER_ITEM:
            const filters = {...state.filters};
            const{name,col} = action.payload;
            if(filters[col].includes(name)){
                filters[col] = filters[col].filter(item => item !== name);
            }else{
                filters[col] = [...filters[col],name];
            }
            return{
                ...state,
                filters
            }
        default : return state;
    }
}

function compare(obj,sortBy,orderBy){
    const arr = Object.keys(obj).map((key) => [key,obj[key]]);
    if(sortBy === 'Date'){
        arr.sort((a,b) => {
            return new Date(a[1][sortBy]) - new Date(b[1][sortBy]);
        })
    }else{
      arr.sort((a,b) => {
        if(a[1][sortBy] > b[1][sortBy]){return 1}
        if(a[1][sortBy] < b[1][sortBy]){return -1}
        return 0;
      })
    }
      const list = (orderBy === 'asc') ? [...arr]:[...arr.reverse()];
      const loans = {};
      for(const i of list){
          loans[i[0]] = i[1];
      }
      return loans;
}