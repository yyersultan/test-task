import { Button, TableCell, TableRow } from "@mui/material"

export const TableLoansRow = ({data}) => {
    const date_time = data.Date.split(' ');
    const date = date_time[0].split(',').join('.')
    return(
        <TableRow>
            <TableCell>{data.id}</TableCell>
            <TableCell>{date} {date_time[1]}</TableCell>
            <TableCell>{data.subsidiary}</TableCell>
            <TableCell>{data.segment}</TableCell>
            <TableCell>{data.compony}</TableCell>
            <TableCell>{data.BIN}</TableCell>
            <TableCell>{data.number_CL}</TableCell>
            <TableCell>{data.sum}</TableCell>
            <TableCell>{data.GOS_programm ? 'YES' : 'NO'}</TableCell>
            <TableCell>{data.status}</TableCell>
            <TableCell>{data.in_work}</TableCell>
            <TableCell>{data.time}</TableCell>
            <TableCell> 
                <Button 
                size="small"
                variant="contained" >Xронология заявки</Button> 
            </TableCell>
            <TableCell> 
                <Button 
                size="small"
                color='warning'
                variant="contained" >Переназнчит заявку</Button> 
            </TableCell>

        </TableRow>
    )
}