import React from "react";
import './ExpensesMain.css';
import Expense from'./Expense.js';
import Card from'../UI/Card.js';

const ExpensesMain=(props)=>{
return (<Card className='expensesMain'>
    < Expense
    date={props.item[0].date}
    title={props.item[0].title}
    amount={props.item[0].amount}
    location={props.item[0].location}/>

    < Expense
    date={props.item[1].date}
    title={props.item[1].title}
    amount={props.item[1].amount}
    location={props.item[1].location}/>
    
    < Expense
    date={props.item[2].date}
    title={props.item[2].title}
    amount={props.item[2].amount}
    location={props.item[2].location}/>
    
     </Card>)
}
export default ExpensesMain;