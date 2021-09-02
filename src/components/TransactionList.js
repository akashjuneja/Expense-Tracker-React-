import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { deleteTransaction } from '../actions';



const TransactionList = () => {
    const trans = useSelector(state => state.transaction);
    const dispatch = useDispatch();
    let x=Object.values(trans);
   
const deleteTrans=(obj)=>{
   dispatch(deleteTransaction(obj))
}
    return (
         <div>
            <h3>History</h3>
            {x.map((k)=>{
                return(
                 <ul id="list" className="list" >
               <li className={k.amount<0 ?'minus':'plus'} key={x.id}>
          {k.text}<span>${k.amount}</span><button className="delete-btn" onClick={()=>{
              deleteTrans(k.id)
          }}>x</button>
        </li> 
      </ul>
                )
            })}
     
        </div>
    )
       
}

export default TransactionList;
