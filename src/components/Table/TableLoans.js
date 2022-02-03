import { Paper, TableBody, TextField } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getLoansData } from "../../store/actions/table";
import { filterColumns } from "../../utils/filterColumns";
import { Filters } from "../Filters/Filters";
import { TableLoansHeader } from "./TableLoansHeader";
import { TableLoansRow } from "./TableLoansRow";

export const TableLoans = () => {
    const dispatch = useDispatch();
    const {loans,sortByObj,loans_save,filters,isLoading} = useSelector(state => state.table);
    const[search,setSearch] = useState('');
    const[filtered_loans,setFilterLoans] = useState({...loans});

    const onInputCh = (e) => setSearch(e.target.value)

    useEffect(() => {
        dispatch(getLoansData());
    },[]);

    useEffect(() => {
        setFilterLoans(loans);
    },[loans]);

    useEffect(() => {
        const arr = Object.entries(loans)
        .filter(([_,value]) => value.subsidiary.includes(search) 
        || value.in_work.includes(search));
        const filtered_obj = Object.fromEntries(arr);
        setFilterLoans(filtered_obj);
    },[search]);

    useEffect(() => {
        console.log(loans);
        const f_obj = filterColumns(loans,filters);
        setFilterLoans(f_obj);
    },[filters]);
    
    if(isLoading){
        return <div>Loading ...</div>
    }
    
    return (
        <>
        <Filters loans={loans_save}/>
        <TextField value={search} onChange={onInputCh}/>
        <Paper >
            <TableLoansHeader 
                sortByObj = {sortByObj}
                dispatch = {dispatch}
            />
            <TableBody>
                {Object.keys(filtered_loans).map((key,index) => (
                    <TableLoansRow 
                    key={key}
                    index = {index}
                    data = {filtered_loans[key]}/>
                ))}
            </TableBody>
        </Paper>
        </>
    )
}