import { Button } from "@mui/material";
import { memo, useState } from "react"
import { countCol } from "../../utils/counter";
import { FilterItem } from "./FilterItem";

const filters_item = {'subsidiary':'Филиал','segment':'Сегмент','compony':'Компания','status':'Статус','in_work':'В работе'};

export const Filters = memo(({loans,filters}) => {
    
    const[showFilters,setShowFilters] = useState(true);
    const onShowFilterHandle = () => setShowFilters(prev=> !prev);
    return (
        <div className="Filters">
            <section>
                <Button 
                    onClick={onShowFilterHandle}
                    disabled={showFilters} 
                    variant="contained">
                    Show filters
                </Button>
                <Button 
                    onClick={onShowFilterHandle}
                    disabled={!showFilters} 
                    variant="contained">
                    Hide filters
                </Button>
            </section>
            <div className="clearFilters">
                <Button>Clear filters</Button>
            </div>
            {/* Filters section  */}
            
            {showFilters && <section className="Filter_Items_Container">
                {Object.keys(filters_item).map((key,i) => {
                    const obj_count = countCol(loans,key);
                    return <FilterItem 
                                active_filters = {filters[key]}
                                col = {key}
                                col_name = {filters_item[key]}
                                key={`${key}+${i}`}
                                filter_obj={obj_count}/>
                })}
            </section>}
        </div>
    )
})