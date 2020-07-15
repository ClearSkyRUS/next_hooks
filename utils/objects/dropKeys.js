export default (arr, toDrop, arrKeys) => {
	for (const obj of arr) {
		if (!obj) continue
		for (const key of arrKeys) {
			obj[toDrop] = obj?.[toDrop]?.[key]
		}
	}
	return arr
}