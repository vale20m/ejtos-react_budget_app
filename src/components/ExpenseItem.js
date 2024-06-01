import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const decreaseAllocation = (id) => {
        dispatch({
            type: 'SUBTRACT_EXPENSE',
            payload: id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button onClick={event => increaseAllocation(props.name)}>+</button></td>
        <td><button size='1.5em' onClick={event => decreaseAllocation(props.id)}>-</button></td>
        </tr>
    );
};

export default ExpenseItem;