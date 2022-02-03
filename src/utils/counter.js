export const countCol = (obj,col) => {
    const res = {};
    Object.keys(obj).forEach(key => {
        const item = obj[key];
        res[item[col]] = res[item[col]] ? ++res[item[col]] : 1;
    });
    return res;
}