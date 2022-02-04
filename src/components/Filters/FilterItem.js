import { Button } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setFilterItem} from '../../store/actions/table';
import { sortFilterItems } from "../../utils/sortFilterItems";

export const FilterItem = memo(({filter_obj,col_name,col,active_filters}) => {
    const dispatch = useDispatch();
    const[filterObj,setFilterObj] = useState(filter_obj);
    const[sortByName,setSortByName] = useState(false);
    const[sortByCount,setSortByCount] = useState(false);

    const onFilterItemClick = (name) => {
        dispatch(setFilterItem({col,name}));
    }
    useEffect(() => {
        setSortByCount(false);
        if(sortByName){
            const new_obj = sortFilterItems(filterObj,'name');
            setFilterObj(new_obj);
        }
    },[sortByName]);

    useEffect(() => {
        setSortByName(false);
        if(sortByCount){
            const new_obj = sortFilterItems(filterObj,'count');
            setFilterObj(new_obj);
        }
       
    },[sortByCount]);
    console.log(sortByCount);
    return (
        <div>
        <h2>{col_name} 
        <i className="fas fa-search"/>
         </h2>
        <div className="row">
            <Button 
            onClick={() => setSortByName(true)} >
                Aad <i className="fas fa-arrows-alt-v"/>
            </Button>
            <Button 
            onClick={() => setSortByCount(true)}>
                # <i className="fas fa-arrows-alt-v"/>
            </Button>
        </div>
        <ul className="FilterItem">
            {Object.keys(filterObj).map((name,index) => {
                return (
                <li 
                onClick={() => onFilterItemClick(name)}
                className={`FilterItem_item ${active_filters.includes(name) && 'FilterItem_item_active'}`}
                key={`${name}&${index}`}>
                    <div>{name}</div>
                    <div className="FilterItem_count"> 
                        {filterObj[name]} 
                    </div>
                </li>
                )
            })}
        </ul>
        </div>
    )
})