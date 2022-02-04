export const sortFilterItems = (obj,sortBy) => {
    if(sortBy === 'name'){
        const sortable = Object.fromEntries(
            Object.entries(obj).sort(([a,],[b,]) => {
                if(a > b) return 1;
                if(a < b) return -1;
                return 0;
            })
        );
        return sortable;
    }else if(sortBy === 'count'){
        const sortable = Object.fromEntries(
            Object.entries(obj).sort(([,a],[,b]) => a-b)
        );
        return sortable;
    }else{
        return obj
    }
}