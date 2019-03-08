import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'

const Child = ({ open, list, onClose }) => {
	console.log('Child...')
	const [childList, setChildList] = useState([])

	useEffect(
		() => {
			if (list && list.length) {
				setChildList([...list])
			}
		},
		[list],
	)

	const handleInputChange = (e, listItem) => {
		let newName = e.currentTarget.value

		const newList = map(item => {
			if (item.id === listItem.id) {
				const copy = JSON.stringify(item);
				const newItem = JSON.parse(copy);
				newItem.name = newName;
				return newItem;
			}

			return item
		}, childList)

		setChildList(newList)
	}
	if (!open) {
		return <Fragment />
	}

	return (
		<Fragment>
			<h3>Child list to edit</h3>
			<p>Edit some values and click cancel.</p>
			<p>The values you have changed should not be reflected in the parent but they are :(</p>
			{childList.map(item => (
				<div key={item.id}>
					<input
						type="text"
						value={item.name}
						onChange={e => handleInputChange(e, item)}
					/>
				</div>
			))}
			<hr />
			<button onClick={onClose}>Cancel & close child</button>
		</Fragment>
	)
}

Child.propTypes = {
	open: PropTypes.bool,
	list: PropTypes.array,
	onClose: PropTypes.func,
}

export default Child
