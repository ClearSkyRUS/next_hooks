const objHasProps = (obj, props) => {
	if (typeof props === 'object') {
		if (!Array.isArray(props)) {
			for (let key in props) {
				if (props[key] && !obj[key])
					return false
			}
		} else if (JSON.stringify(obj) !== JSON.stringify(props))
			return false
	} else if (obj !== props)
		return false
	return true
}

export default objHasProps