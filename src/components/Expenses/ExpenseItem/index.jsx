import React, { useState } from 'react'
import './ExpenseItem.css'
import ExpenseDate from '../ExpenseDate'
import Card from '../../UI/Card'

export default function ExpenseItem({title, amount, date}) {
	
	const [itemTitle, setItemTitle] = useState(title);

	const clickHandler = () => {
		setItemTitle('Ford');
	}

	return (
		<Card className='expense-item'>
			<ExpenseDate date={date} />
			<div className='expense-item__description'>
				<h2>{itemTitle}</h2>
				<div className='expense-item__price'>${amount}</div>
			</div>
			<button onClick={clickHandler}>Change Title</button>
		</Card>
	)
}
