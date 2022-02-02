import { SET_LOANS, SET_SORT_BY } from "../actions/table";

const initalState = {
    loans: {},
    sortByObj:{sortBy: 'id',orderBy:'asc'},
    
}

export const tableReducer = (state=initalState,action) => {
    switch(action.type){
        case SET_LOANS:
            return{
                ...state,
                loans: action.payload
            }
        case SET_SORT_BY:
            const loans = compare({...state.loans},action.payload.sortBy,action.payload.orderBy);
            console.log(loans);
            return {
                ...state,
                loans,
                sortByObj:action.payload
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