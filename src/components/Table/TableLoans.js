import { Paper, TableBody, TablePagination, TextField } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getLoansData } from "../../store/actions/table";
import { filterColumns } from "../../utils/filterColumns";
import { Filters } from "../Filters/Filters";
import { Loading } from "../Loading/Loading";
import { TableLoansHeader } from "./TableLoansHeader";
import { TableLoansRow } from "./TableLoansRow";

export const TableLoans = () => {
    const dispatch = useDispatch();
    const {loans,sortByObj,loans_save,filters,isLoading} = useSelector(state => state.table);
    const[search,setSearch] = useState('');
    const[filtered_loans,setFilterLoans] = useState({...loans});
    const[page,setPage] = useState(0);
    const[rowsPerPage,setRowsPerPage] = useState(4);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

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
        return <Loading />
    }
    
    return (
        <>
        <Filters filters = {filters} loans={loans_save}/>
        <TextField label='Search' style={{margin:'20px'}} 
        size="small"  value={search} onChange={onInputCh}/> 
        <Paper >
            <TableLoansHeader 
                sortByObj = {sortByObj}
                dispatch = {dispatch}
            />
            <TableBody>
                {Object.keys(filtered_loans)
                .slice(page*rowsPerPage,page*rowsPerPage + rowsPerPage)
                .map((key,index) => (
                    <TableLoansRow 
                    key={key}
                    index = {index}
                    data = {filtered_loans[key]}/>
                ))}
            </TableBody>
            <TablePagination 
                rowsPerPageOptions={[3,4,5]}
                rowsPerPage={rowsPerPage}
                count={Object.keys(loans).length} 
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                />
        </Paper>
        </>
    )
}