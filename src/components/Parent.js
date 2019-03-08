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

	const onClose = () => {
		setChildOpen(false)
	}

	return (
		<Fragment>
			<h1>The problem</h1>
			<p>I have two component (Parent and Child), the parent is using local state for "list", which is being passed down to the child as a prop.</p>
			<p>The child then takes that prop and creates a local state of it's own from that list to edit it.</p>
			<p>The child has an inputHandler to edit the list's values within it's own local state.</p>
			<p>The child also has a prop for onClose which is triggered from the parent.</p>
			<p>As soon as the onClose is triggered from the parent, the parent list is being updated with the values from the child state, which is not what I expected as the child's state is totally separate.</p>
			<p>Any ideas?</p>
			<hr />
			<h2>Parent list</h2>
			{list.map(item => <div key={item.id}>{item.name}</div>)}
			<hr />
			<button onClick={() => setChildOpen(true)}>Open child</button>
			<hr />
			<Child
				open={childOpen}
				list={list}
				onClose={onClose}
			/>
		</Fragment>
	)
}

export default Parent
