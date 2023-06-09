import React from 'react'
import './NewExpense.css'
import { ExpenseForm } from '../ExpenseForm'

const NewExpense = ({ onAddExpense }) => {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // manda os dados 'expenseDate' para o componente App (PAI)
        onAddExpense(expenseData);
    }

    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
        </div>
    )
}

export default NewExpense