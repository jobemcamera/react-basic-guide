import React, { useState } from 'react'
import './ExpenseForm.css'

export const ExpenseForm = () => {
    
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

        // Forma que pode pegar dados anteriores desatualizados
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value,
        // })       
    }
    
    const dateChangeHandler = (event) => {
        // Forma principal
        setEnteredDate(event.target.value);

        // Forma que pode pegar dados anteriores desatualizados
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
    }

    return (
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min='2023-01-01' max='2023-12-31' onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    )
}
