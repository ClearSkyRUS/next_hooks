export default (arr, key, valKey) => {
	let result = {}
	for (const obj of arr) {
		result[obj[key]] = obj[valKey]
	}
	return result
}