function Expense(props){
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const year=props.date.getFullYear();
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <div className='expense-item'>
        <div>
           <div>{month}</div>
           <div>{year}</div>
           <div>{day}</div>
        </div>
        <div class='expense-item_descript'><h2>{props.title}</h2></div>
        <div className='expense-item__price'>{props.amount}</div>
        <div className='expense-item__location'>{props.location}</div>
           </div>
    );
}
export default Expense;