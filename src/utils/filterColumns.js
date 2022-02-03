export const  filterColumns = (loans,filters) => {
    console.log(loans);
    const arr = Object.entries(loans)
        .filter(([_,value]) => {
            if(filters.subsidiary.length){
                if(!filters.subsidiary.includes(value.subsidiary)){
                    return false;
                }
            }else if(filters.compony.length){
                if(!filters.compony.includes(value.compony) ){
                    return false;
                }
            }else if(filters.segment.length){
                if(!filters.segment.includes(value.segment)){
                    return false;
                }
            }else if(filters.status.length){
                if(!filters.status.includes(value.status)){
                    return false;
                }
            }else if(filters.in_work.length){
                if(!filters.in_work.includes(value.in_work)){
                    return false;
                }
            }else{
                return true;
            }
        });
        const filtered_obj = Object.fromEntries(arr);
        console.log(filtered_obj);
        return filtered_obj;
}