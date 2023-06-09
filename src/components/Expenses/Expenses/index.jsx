import React, { useState } from 'react'
import './Expenses.css'
import Card from '../../UI/Card'
import ExpensesFilter from '../ExpensesFilter'
import ExpensesList from '../ExpensesList'

export default function Expenses({ items }) {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </>
    )
}
