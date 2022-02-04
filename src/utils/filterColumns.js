export function filterColumns(loans,filters) {
    const arr = Object.entries(loans)
    .filter(([_,value]) => {
      if(filters.subsidiary.length > 0 && !filters.subsidiary.includes(value.subsidiary)){
        return false;
      }if(filters.compony.length > 0 && !filters.compony.includes(value.compony)){
        return false;
      }if(filters.segment.length > 0 && !filters.segment.includes(value.segment)){
        return false;
      }if(filters.status.length > 0 && !filters.status.includes(value.status)){
        return false;
      }if(filters.in_work.length > 0 && !filters.in_work.includes(value.in_work)){
        return false;
      }
      return true
    })
    return Object.fromEntries(arr);
  }
  