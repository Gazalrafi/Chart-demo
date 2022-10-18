import Expense from'./components/Expense.js';
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
        < Expense
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
        location={expenses[0].location}>
        </Expense>
        < Expense
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
        location={expenses[1].location}>
        </Expense>
        < Expense
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
        location={expenses[2].location}>
        </Expense>
            </div>
       );
    
}
export default App;