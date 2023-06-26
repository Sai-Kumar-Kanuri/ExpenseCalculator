import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHandler = () => (
        setIsEditing((prevState) => (!prevState)));

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        // setIsEditing(false);
    };


    return (
        <div className='new-expense'>
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={startEditingHandler} />}
            {!isEditing && <botton onClick={startEditingHandler}>Add new Expense</botton>}


        </div>
    );
};

export default NewExpense;