import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem({title, amount, date}) {
	const expenseDate = new Date(2023, 1, 28);
	const expenseTitle = 'Car Insurance';
	const expenseAmount = 294.67;

	return (
		<div className='expense-item'>
			<div>{date.toISOString()}</div>
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
		</div>
	)
}
