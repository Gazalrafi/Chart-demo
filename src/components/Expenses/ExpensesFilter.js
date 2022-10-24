import React,{useState} from "react";
import "./ExpensesFilter.css";
const ExpensesFilter=(props)=>{
        const [FilteredYear,setFilteredYear]=useState('');
      
        const FilterChangeHandler=(event)=>{
        setFilteredYear(event.target.value);
        };
        const selectHandler=()=>{
        const Year={
            year:FilteredYear
        }
        props.onClickYear(Year);
        console.log(Year);
        setFilteredYear('2020')
    }
return(
 <div>
    <label className="expenses-filter"><h3>Select Year</h3></label>
    <select className="expenses-select" value={selectHandler} onChange={FilterChangeHandler}>
    <option className="year-nineteen">2019</option>
    <option className="year-twenty">2020</option>
    <option className="year-twentyone">2021</option>
    <option className="year-twentytwo">2022</option>
    </select>
 </div>
);
}
export default ExpensesFilter;