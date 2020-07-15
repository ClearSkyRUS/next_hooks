import { getNodeTextLength } from './'

let gThan
let gAlowTypes

export default (
	nodes,
	than = 400,
	alowTypes = ['p']
) => {
	gThan = than
	gAlowTypes = alowTypes
	return nodes.reduce(reduce, [])
}

const reduce = (result, node, index) =>
	gAlowTypes.includes(node.type) && getNodeTextLength(node) >= gThan
		? [...result, index]
		: result