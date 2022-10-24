import React from "react";
import './ExpensesMain.css';    //
import Expense from'./Expense.js';
import Card from'../UI/Card.js';
import ExpensesFilter from "./ExpensesFilter.js";

const ExpensesMain=(props)=>{
  const saveYearHandler=(enteredYear)=>{
    props.onAddYear(enteredYear);
    console.log(enteredYear)
  }
  // const filteredExpenses=props.item.filter(expense=>{
  //   return expense.date.getFullYear().toString()===saveYearHandler;
  // })
return (
  <Card className='expensesMain'>
     <ExpensesFilter onSaveYear={saveYearHandler}/>
    {   
        props.item.map( expensemain=>(
         
                < Expense
                    date={expensemain.date}
                    title={expensemain.title}
                    amount={expensemain.amount}
                    location={expensemain.location}/>
            )
        )
    }
     </Card>)
}
export default ExpensesMain;