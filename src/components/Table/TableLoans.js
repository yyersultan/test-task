import { Paper, TableBody, TextField } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getLoansData } from "../../store/actions/table";
import { TableLoansHeader } from "./TableLoansHeader";
import { TableLoansRow } from "./TableLoansRow";

export const TableLoans = () => {
    const dispatch = useDispatch();
    const {loans,sortByObj} = useSelector(state => state.table);
    const[search,setSearch] = useState('');
    const onInputCh = (e) => setSearch(e.target.value)
    useEffect(() => {
        dispatch(getLoansData());
    },[]);
    const arr = Object.entries(loans).filter(([key,value]) => value.subsidiary.includes(search) 
    || value.in_work.includes(search));
    const filtered_loans = Object.fromEntries(arr);
    return (
        <>
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