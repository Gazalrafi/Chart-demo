import React from "react";
import ExpensesMain from'./components/Expenses/ExpensesMain.js';

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
            amount:"Rs.100",
            location:'Theatre',
            date:new Date(2021,5,30)
        }
        
    ];
   
    return (
        <div>
            <h2>Expense Tracker</h2>
            <ExpensesMain item={expenses}/>
        </div>
       );
    
}
export default App;