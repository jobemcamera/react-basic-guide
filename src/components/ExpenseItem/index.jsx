import React from 'react'
import './ExpenseItem.css'

export default function ExpenseItem() {
	return (
		<div className='expense-item'>
			<div>June 6th 2023</div>
			<div className='expense-item_description'>
				<h2>Car Insurance</h2>
				<div className='expense-item__price'>$350.00</div>
			</div>
		</div>
	)
}
