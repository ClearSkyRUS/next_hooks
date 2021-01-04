export default (arr, key, valKey) => {
	const result = {}
	if (!Array.isArray(arr)) return result
	for (const obj of arr) {
		result[obj[key]] = obj[valKey]
	}
	return result
}