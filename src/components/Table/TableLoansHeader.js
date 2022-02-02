import { TableCell, TableHead, TableRow, TableSortLabel } from "@mui/material"
import { setSortByAc } from "../../store/actions/table"

export const TableLoansHeader = ({dispatch,sortByObj}) => {
    const sortBy = sortByObj['sortBy'];
    const orderBy = sortByObj['orderBy'];
    console.log(sortByObj);
    const onSortHandle = (row) => {
        let ord = (orderBy==='asc')?'desc':'asc';
        dispatch(setSortByAc({"sortBy":row,"orderBy":ord}));
    }
    return (
        <TableHead>
            <TableRow>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('id')}
                        active = {sortBy === 'id'}
                        direction={sortBy === 'id'? orderBy : 'desc'}>
                        Num
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('Date')}
                        active = {sortBy === 'Date'}
                        direction={sortBy === 'Date' ? orderBy : 'desc'}>
                        Дата заявки
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('subsidiary')}
                        active = {sortBy === 'subsidiary'}
                        direction={sortBy === 'subsidiary' ? orderBy : 'desc'}>
                        Филиал
                    </TableSortLabel>
                    Филиал
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('segment')}
                        active = {sortBy === 'segment'}
                        direction={sortBy === 'segment' ? orderBy : 'desc'}>
                        Сегмент
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('compony')}
                        active = {sortBy === 'compony'}
                        direction={sortBy === 'compony' ? orderBy : 'desc'}>
                        Компания
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('BIN')}
                        active = {sortBy === 'BIN'}
                        direction={sortBy === 'BIN' ? orderBy : 'desc'}>
                        BIN
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('number_CL')}
                        active = {sortBy === 'number_CL'}
                        direction={sortBy === 'number_CL' ? orderBy : 'desc'}>
                        Номер КЛ
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('sum')}
                        active = {sortBy === 'sum'}
                        direction={sortBy === 'sum' ? orderBy : 'desc'}>
                        Сумма
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('GOS_programm')}
                        active = {sortBy === 'GOS_programm'}
                        direction={sortBy === 'GOS_programm' ? orderBy : 'desc'}>
                        Гос программа
                    </TableSortLabel>
                </TableCell>
                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('status')}
                        active = {sortBy === 'status'}
                        direction={sortBy === 'status' ? orderBy : 'desc'}>
                        Статус
                    </TableSortLabel>
                    Статус
                </TableCell>
                <TableCell>
                    <TableSortLabel
                        onClick={() => onSortHandle('in_work')}
                        active = {sortBy === 'in_work'}
                        direction={sortBy === 'in_work' ? orderBy : 'desc'}>
                        В работе
                    </TableSortLabel>
                </TableCell>

                <TableCell >
                    <TableSortLabel
                        onClick={() => onSortHandle('time')}
                        active = {sortBy === 'time'}
                        direction={sortBy === 'time' ? orderBy : 'desc'}>
                        Время(мин)
                    </TableSortLabel>
                </TableCell>
                <TableCell> &nbsp;&nbsp; &nbsp;&nbsp;</TableCell>
                <TableCell> &nbsp;&nbsp; &nbsp;&nbsp;</TableCell>
            </TableRow>
        </TableHead>
    )
}