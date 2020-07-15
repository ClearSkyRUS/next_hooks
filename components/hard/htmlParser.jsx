import ReactHtmlParser from "react-html-parser"

import {Image} from "components/pureUi"

import {getBigNodes} from "utils/nodes"

let gAllowedIndexes = []
let gImages = []
let gImageIndex = 0

export default ({htmlString, images}) => {
	const parsedNodes = ReactHtmlParser(htmlString)
	gImageIndex = 0
	gImages = images
	gAllowedIndexes = getBigNodes(parsedNodes)
	return parsedNodes?.reduce(reduce, [])
}

const reduce = (nodes, node, index) =>
	gImages[gImageIndex] && node.type === "p" && gAllowedIndexes.includes(index)
		? [...nodes, image(), node]
		: [...nodes, node]

const image = () => {
	const index = gImageIndex
	const classes = `ui small ${
		index % 2 ? "right" : "left"
	} floated rounded image squartInText`
	gImageIndex++
	return (
		<Image
			key={`image-${index}`}
			id={gImages[index]}
			classes={classes}
			wraperClasses={classes}
			style={{}}
			width={150}
			height={150}
		/>
	)
}
