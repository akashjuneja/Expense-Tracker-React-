import React ,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addTransaction} from '../actions';

const AddTransaction = () => {

    const [text, setText]=useState('');
    const [amount, setAmount]=useState(0);
    const dispatch =useDispatch();

    const onSubmit=(e)=>{
        e.preventDefault();

        const addTransaction1={
            id:new Date().getUTCMilliseconds(),
            text:text,
            amount:amount
        }

        dispatch(addTransaction(addTransaction1));


    }
    return (
        <div>
            <h3>Add new transaction</h3>
      <form id="form" onSubmit={onSubmit} >

        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" text={text} onChange={(e)=>{
              setText(e.target.value)
          }}placeholder="Enter text..." />
        </div>

        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>{
              setAmount(e.target.value)
          }} placeholder="Enter amount..." />


          <button className="btn">Add transaction</button>
          </div>
          </form>
        </div>
    );
}

export default AddTransaction;
