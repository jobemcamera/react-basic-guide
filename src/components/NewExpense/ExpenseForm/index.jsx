import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = ({ onSaveExpenseDate, onCancel}) => {

    // Forma principal (tudo separado)
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // Forma alternativa (tudo junto)
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // Forma principal
        setEnteredTitle(event.target.value);

        // Forma que pode pegar dados anteriores desatualizados
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })

        // Forma que garante dados anteriores atualizados
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    }

    const amountChangeHandler = (event) => {
        // Forma principal
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        // Forma principal
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseDate = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }

        // manda os dados 'expenseDate' para o componente NewExpense (PAI)
        onSaveExpenseDate(expenseDate);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        type='number'
                        value={enteredAmount}
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        value={enteredDate}
                        min='2019-01-01'
                        max='2023-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm