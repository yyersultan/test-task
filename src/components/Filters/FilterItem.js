import { useDispatch } from "react-redux";
import {setFilterItem} from '../../store/actions/table';

export const FilterItem = ({filter_obj,col_name,col}) => {
    const dispatch = useDispatch();

    const onFilterItemClick = (name) => {
        dispatch(setFilterItem({col,name}));
    }
    return (
        <div>
        <h2>{col_name}</h2>
        <ul className="FilterItem">
            {Object.keys(filter_obj).map((name,index) => {
                return (
                <li 
                onClick={() => onFilterItemClick(name)}
                className="FilterItem_item"
                key={`${name}&${index}`}>
                    <div>{name}</div>
                    <div className="FilterItem_count"> 
                        {filter_obj[name]} 
                    </div>
                </li>
                )
            })}
        </ul>
        </div>
    )
}