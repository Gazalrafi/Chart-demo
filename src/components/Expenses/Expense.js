import React,{useState} from "react";
import ExpenseDate from './ExpenseDate.js';
import './Expense.css';
import ExpenseAmount from './ExpenseAmount.js';
import Card from '../UI/Card.js';
const Expense=(props)=>{
   const [newAmount,setNewAmount]=useState("")
   
   const [amount,setAmount]=useState(props.amount);
   
   const clickHandler=()=>{

    setAmount(newAmount);
   }
   const changeHandler=(event)=>{

    setNewAmount(event.target.value)

   }
    return(
        
        <Card className='expense-item'>
    
        <div className='expense-item__title'><h1>{props.title}</h1></div>
        <ExpenseDate date={props.date} />
        <ExpenseAmount amount={amount} />
        <div className='expense-item__location'>{props.location}</div>
        <input type="text" value={newAmount} onChange={changeHandler}/>
        <button onClick={clickHandler}>Click here to change title</button>
        </Card>
    );
}
export default Expense;