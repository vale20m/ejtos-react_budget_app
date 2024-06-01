import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { remaining, currency, budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000){
            event.target.value = 20000;
            alert("Budget cannot be over £20000");
        }
        if (event.target.value < remaining){
            event.target.value = remaining;
            alert("You cannot reduce the budget value lower than the spending");
        }
        setNewBudget(event.target.value);
    }
    return (
        <div className='alert alert-secondary'>
        <span>Budget: {currency}{budget}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;