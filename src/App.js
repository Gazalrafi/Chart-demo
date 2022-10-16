import  './App.css'
function App(){
    const  locationOfExpenditure='market';

    return <div className='expense'>
        <h1>Expense items</h1>
        <p1>Food </p1>
        <div className='expense1'>Rs 10 {locationOfExpenditure}</div>
        <p1>Petrol</p1>
        <div className='expense2'>Rs 100 {locationOfExpenditure}</div>
        <p1>Movies </p1>
        <div className='expense3'>Rs 200 {locationOfExpenditure}</div>
    </div>
    ;

}
export default App;