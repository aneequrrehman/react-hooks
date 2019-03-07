import React, { Fragment, useState, useEffect } from 'react'
import Child from './Child'

const initialList = [
	{
		id: '1',
		name: 'First',
	},
	{
		id: '2',
		name: 'Second',
	},
]

const Parent = props => {
	console.log('Parent...')
	const [list, setList] = useState([])
	const [childOpen, setChildOpen] = useState(false)

	useEffect(() => {
		setList(initialList)
	}, [])

	return (
		<Fragment>
			{list.map(item => <div key={item.id}>{item.name}</div>)}
			<button onClick={() => setChildOpen(true)}>Open child</button>
			<hr />
			<Child
				open={childOpen}
				list={list}
				onClose={() => {
					setChildOpen(false)
				}}
			/>
		</Fragment>
	)
}

export default Parent
