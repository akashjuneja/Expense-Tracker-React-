import React from 'react';
import { useSelector } from 'react-redux';


const Balance = () => {
    const trans = useSelector(state => state.transaction);
    const amounts = trans.map(transaction => transaction.amount);
    console.log(amounts)
    let total=0;
    for(let i=0;i<amounts.length;i++){
        total+=parseInt(amounts[i]);
    }
    console.log(total)

    return (
        <div className="container">
         <h4>Your Balance</h4>
         <h1 id="balance">${total}</h1>
        </div>
    );
}

export default Balance;
