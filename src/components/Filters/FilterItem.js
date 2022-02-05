import { Button } from "@mui/material";
import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {setFilterItem} from '../../store/actions/table';
import { sortFilterItems } from "../../utils/sortFilterItems";

export const FilterItem = memo(({filter_obj,col_name,col,active_filters}) => {
    
    const dispatch = useDispatch();
    const[filterObj,setFilterObj] = useState(filter_obj);
    const[sortByFilterItem,setSortByFilterItem] = useState({
        name: false,
        count: false
    });

    const onFilterItemClick = (name) => {
        dispatch(setFilterItem({col,name}));
    }
    const changeNameFilter = () => {
        setSortByFilterItem({
            name: true,
            count: false
        });
    }
    const changeCountFilter = () => {
        setSortByFilterItem({
            name: false,
            count: true
        })
    }

    useEffect(() => {
        if(sortByFilterItem.name){
            const new_obj = sortFilterItems(filterObj,'name');
            setFilterObj(new_obj);
        }if(sortByFilterItem.count){
            const new_obj = sortFilterItems(filterObj,'count');
            setFilterObj(new_obj);
        }
    },[sortByFilterItem]);

    const clearFilterItem = () => {
        setSortByFilterItem({name: false,count: false});
    }


    const {name,count} = sortByFilterItem
    return (
        <div>
        <h2>{col_name} 
        <i className="fas fa-search"/>
         </h2>
        <div className="row">
            <Button variant={name ? 'contained':'text'}
            onClick={changeNameFilter} >
                Aad <i className="fas fa-arrows-alt-v"/>
            </Button>
            <Button variant= {count ? 'contained':'text'}
            onClick={changeCountFilter}>
                # <i className="fas fa-arrows-alt-v"/>
            </Button>
            <Button onClick = {clearFilterItem}>X</Button>
        </div>
        <ul className="FilterItem">
            {Object.keys(filterObj).map((name,index) => {
                return (
                <li 
                onClick={() => onFilterItemClick(name)}
                className={`FilterItem_item ${active_filters.includes(name) 
                && 'FilterItem_item_active'}`}
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