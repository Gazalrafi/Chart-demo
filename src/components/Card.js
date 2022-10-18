import './Card.css';
function Card(props){
   
   return (
    <div>
    
   <div className='card'>{props.children}</div>
   </div>
   );
}
export default Card;