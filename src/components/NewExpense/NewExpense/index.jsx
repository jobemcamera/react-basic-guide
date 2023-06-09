import React, { useState } from 'react'
import './NewExpense.css'
import ExpenseForm from '../ExpenseForm'

const NewExpense = ({ onAddExpense }) => {

    const [isEditing, setIsEditing] = useState(false);

    const startEditingHadler = () => setIsEditing(true);

    const stopEditingHandler = () => setIsEditing(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        // manda os dados 'expenseDate' para o componente App (PAI)
        onAddExpense(expenseData);
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHadler}>Add New Expense</button>}
            {isEditing && (
                <ExpenseForm 
                    onSaveExpenseDate={saveExpenseDateHandler} 
                    onCancel={stopEditingHandler}
                />
            )}
        </div>
    )
}

export default NewExpense