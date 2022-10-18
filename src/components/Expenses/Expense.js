import React from "react";
import ExpenseDate from './ExpenseDate.js';
import './Expense.css';
import ExpenseAmount from './ExpenseAmount.js';
import Card from '../UI/Card.js';
const Expense=(props)=>{
   
    return(
        
        <Card className='expense-item'>
    
        <div className='expense-item__title'>{props.title}</div>
        <ExpenseDate date={props.date} />
        <ExpenseAmount amount={props.amount} />
        <div className='expense-item__location'>{props.location}</div>

        </Card>
    );
}
export default Expense;