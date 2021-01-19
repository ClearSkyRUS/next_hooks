import {useContext} from "react"
import Link from "next/link"

import {apiPath} from "config"

import {LangContext, ItemsContext} from "context"

import {Loader} from "semantic-ui-react"

import VisibilitySensor from "react-visibility-sensor"
import Img from "react-image"

const Logo = ({centered, width = 40, height = 40}) => {
	const [ln] = useContext(LangContext)
	const [state] = useContext(ItemsContext)
	return (
		<div className="flex">
			<Link href="/[lang]/" as={`/${ln}`}>
				<a className={centered ? "centered" : "regular"}>
					<VisibilitySensor>
						<Img
							style={{margin: "auto", height: `${height}px`}}
							src={[
								`${apiPath}file?height=${height}&id=${state.config?.logo}`,
								"/assets/img/logo.png"
							]}
							loader={
								<div
									style={{
										margin: "auto",
										height: `${height}px`,
										display: "flex"
									}}
								>
									<Loader
										style={{width: `${width}px`, margin: "auto"}}
										active
										inline
									/>
								</div>
							}
						/>
					</VisibilitySensor>
				</a>
			</Link>
		</div>
	)
}

export default Logo
