import React from "react";
import ExpensesMain from'./components/Expenses/ExpensesMain.js';
import NewExpense from "./components/NewExpenses/NewExpense.js";
function App(){
    let expenses=[
        {
            id:'e1',
            title:'Food',
            amount:"Rs.10",
            location:'Restaurant',
            date:new Date(2021,5,12)
        },
        {
            id:'e2',
            title:'Petrol',
            amount:"Rs.100",
            location:'Petrol pump',
            date:new Date(2021,5,14)
        },
        {
            id:'e3',
            title:'Movies',
            amount:"Rs.200",
            location:'Theatre',
            date:new Date(2021,5,30)
        }
        
    ];
   
    return (
        <div>
            
            <NewExpense/>
            <ExpensesMain item={expenses}/>
        </div>
       );
    
}
export default App;