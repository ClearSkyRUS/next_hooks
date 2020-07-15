import { getNodeTextLength } from './'

export default (node) => node.props.children?.reduce(reduce, 0)

const reduce = (length, children) =>
	typeof children === 'string'
		? length + children.length
		: length + getNodeTextLength(children)