import React, { useState } from 'react'
import './Expenses.css'
import Card from '../../UI/Card'
import ExpenseItem from '../ExpenseItem'
import ExpensesFilter from '../ExpensesFilter'

export default function Expenses({ items }) {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((item) => (
            <ExpenseItem
                key={item.id}
                title={item.title}
                amount={item.amount}
                date={item.date}
            />
        ));
    }

    return (
        <>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {expensesContent}
            </Card>
        </>
    )
}
