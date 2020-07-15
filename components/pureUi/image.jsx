import React from "react"

import VisibilitySensor from "react-visibility-sensor"

import {Loader} from "semantic-ui-react"

import {apiPath} from "config"
import Img from "react-image"

const CustomImage = ({
	id,
	classes = "",
	wraperClasses = "squartAlone",
	style = {margin: "auto", width: "100%"},
	width = 500,
	height = 500
}) => (
	<VisibilitySensor>
		<div className={`squartWraper ${wraperClasses}`}>
			<Img
				className={`squareInner ${classes}`}
				style={style}
				// title='title'
				// alt='default'
				src={[
					`${apiPath}file?height=${height}&width=${width}&id=${id}`,
					"/assets/img/holder.png"
				]}
				loader={<Loader className={`squareInner ${classes}`} active />}
			/>
		</div>
	</VisibilitySensor>
)
export default CustomImage
