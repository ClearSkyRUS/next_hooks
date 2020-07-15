import { cloneDeep } from 'lodash'

const items = (state, action) => {
	switch (action.type) {
		case 'SET':
			let newState = cloneDeep(state)
			for (let key in action.payload)
				if (newState[key] && typeof action.payload[key] === 'object') {
					if (Array.isArray(action.payload[key])) {
						newState[key].forEach(element => {
							element = { ...element, ...action.payload[key] }
						})
					} else {
						newState[key] = { ...newState[key], ...action.payload[key] }
					}
				} else {
					newState[key] = action.payload[key]
				}
			return state = { ...newState }
		case 'ADD':
			return { count: state.count - 1 }
		case 'UPDATE':
			return { count: state.count - 1 }
		case 'REMOVE':
			return { count: state.count - 1 }
		default:
			throw new Error()
	}
}

export default items