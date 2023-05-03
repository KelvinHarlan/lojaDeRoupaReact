import './filter.css'
import { FaFilter } from "react-icons/fa";
import { useState } from 'react';


function Filter() {

    const [filterActive, setfilterActive] = useState(false);
    const activeFilter = ()=>{
        setfilterActive(!filterActive);
    }
    
    return (
        <div className='filter-box'>
            <a onClick={activeFilter} className='filter-icon'><FaFilter /></a>
            {filterActive &&(
                <input className='inputFilter' type="search" />
            )}
            <a>Filtrar</a>
        </div>
    )
}

export default Filter;

