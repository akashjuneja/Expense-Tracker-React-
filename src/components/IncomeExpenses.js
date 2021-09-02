import React from 'react';
import { useSelector } from 'react-redux';


const IncomeExpenses = () => {
    const trans = useSelector(state => state.transaction);
    const amounts = trans.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += parseInt(item)), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += parseInt(item)), 0) *
    -1
  );
    return (
            <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money minus">-${expense}</p>
        </div>
      </div>
        
    );
}

export default IncomeExpenses;
