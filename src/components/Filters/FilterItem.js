import { memo } from "react";
import { useDispatch } from "react-redux";
import {setFilterItem} from '../../store/actions/table';

export const FilterItem = memo(({filter_obj,col_name,col,active_filters}) => {
    console.log(active_filters);
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
                className={`FilterItem_item ${active_filters.includes(name) && 'FilterItem_item_active'}`}
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
})