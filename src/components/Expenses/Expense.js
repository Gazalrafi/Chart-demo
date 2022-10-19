import React,{useState} from "react";
import ExpenseDate from './ExpenseDate.js';
import './Expense.css';
import ExpenseAmount from './ExpenseAmount.js';
import Card from '../UI/Card.js';
const Expense=(props)=>{
   const [newtitle,setTitle]=useState(props.title);
   const clickHandler=()=>{
    setTitle('new title');
   }
    return(
        
        <Card className='expense-item'>
    
        <div className='expense-item__title'><h1>{newtitle}</h1></div>
        <ExpenseDate date={props.date} />
        <ExpenseAmount amount={props.amount} />
        <div className='expense-item__location'>{props.location}</div>
        <button onClick={clickHandler}>Click here to change title</button>
        </Card>
    );
}
export default Expense;