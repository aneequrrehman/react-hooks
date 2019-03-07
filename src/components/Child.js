import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'

const Child = ({ open, list, onClose }) => {
	console.log('Child...')
	const [childList, setChildList] = useState([])

	useEffect(
		() => {
			if (list && list.length) {
				setChildList(list)
			}
		},
		[list],
	)

	const handleInputChange = (e, listItem) => {
		let newName = e.currentTarget.value

		const newList = map(item => {
			if (item.id === listItem.id) {
				item.name = newName
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
			{childList.map(item => (
				<div key={item.id}>
					<input
						type="text"
						value={item.name}
						onChange={e => handleInputChange(e, item)}
					/>
				</div>
			))}
			<button onClick={onClose}>Close</button>
		</Fragment>
	)
}

Child.propTypes = {
	open: PropTypes.bool,
	list: PropTypes.array,
	onClose: PropTypes.func,
}

export default Child
