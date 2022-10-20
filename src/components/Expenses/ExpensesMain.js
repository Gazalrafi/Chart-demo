import React from "react";
import './ExpensesMain.css';    //
import Expense from'./Expense.js';
import Card from'../UI/Card.js';

const ExpensesMain=(props)=>{
return (
  <Card className='expensesMain'>
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