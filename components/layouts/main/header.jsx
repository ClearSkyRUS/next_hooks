import React, {useEffect, useState} from "react"

import {
	Menu,
	Visibility,
	Container,
	Header,
	Placeholder
} from "semantic-ui-react"

import {DesctopTopMenu, MobileTopMenu} from "components/menu"
import {apiPath} from "config"

const PageHead = ({
	state,
	ln,
	isStick,
	isMobile,
	isServer,
	setIsStick,
	setIsSidebarVisible,
	isMain,
	router
}) => {
	const [headImage, setImage] = useState(null)
	useEffect(() => {
		const newSrc = state[router?.asPath]?.headBackground
			? `${apiPath}file?height=${
					isMain ? window.innerHeight : window.innerHeight / 3
			  }&width=${window.innerWidth}&id=${state[router?.asPath].headBackground}`
			: "/assets/img/head.jpg"
		if (headImage === newSrc) return
		setImage(null)
		const img = new Image()
		img.src = newSrc
		img.onload = () => setImage(newSrc)
		img.onerror = () => setImage("/assets/img/head.jpg")
	}, [router?.asPath])
	const title = state[router?.asPath]?.title
	return (
		<div id="header">
			{!headImage ? (
				<Placeholder className={isMain ? "mainPage" : "preview"}>
					<Placeholder.Image />
				</Placeholder>
			) : (
				<div
					className={isMain ? "mainPage" : "preview"}
					style={{
						background: `linear-gradient(rgba(255, 255, 255, 0), 
                    rgb(255, 255, 255)), 
                    url(${headImage})`,
						backgroundSize: "cover"
					}}
				>
					{title ? (
						<Container className="pageTitleContainer">
							<Header className="pageTitleHeader" as="h1">
								{title}
							</Header>
						</Container>
					) : (
						""
					)}
				</div>
			)}
			<Visibility
				onTopPassed={(e) => setIsStick(true)}
				onTopVisible={(e) => setIsStick(false)}
				once={false}
			>
				<div className={isStick ? "menuTop" : "menuTopHolder"} />
				<Menu
					className={isStick ? "menuTopFixed" : "menuTop"}
					fixed={isStick ? "top" : undefined}
					secondary
				>
					{!isServer ? (
						isMobile ? (
							<MobileTopMenu setIsSidebarVisible={setIsSidebarVisible} />
						) : (
							<DesctopTopMenu state={state} ln={ln} />
						)
					) : (
						<></>
					)}
				</Menu>
			</Visibility>
		</div>
	)
}

export default PageHead
