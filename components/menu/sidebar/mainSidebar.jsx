import {useRouter} from "next/router"
import {useRouterControl} from "hooks"

import {Menu, Sidebar} from "semantic-ui-react"

const MainSidebar = ({
	state,
	ln,
	isSidebarVisible,
	isMobile,
	setIsSidebarVisible
}) => {
	const router = useRouter()
	const {setRouteFromLink} = useRouterControl()
	const menu = state[`menus${ln}`]?.find((menu) => menu.name === "mainMenu")
	return (
		<Sidebar
			as={Menu}
			id="sidebar"
			animation="overlay"
			icon="labeled"
			onHide={() => setIsSidebarVisible(false)}
			vertical
			visible={isMobile && isSidebarVisible}
		>
			{menu?.links?.map((el, key) => (
				<Menu.Item
					className="capitalize"
					key={key}
					active={
						!el.abs
							? `/[lang]${el.href}` === router?.route ||
							  `/[lang]${el.href}` === `${router?.route}/`
							: el.href === router?.route || el.href === `${router?.route}/`
					}
					content={el?.sign}
					onClick={() => setRouteFromLink(el)}
				/>
			))}
		</Sidebar>
	)
}

export default MainSidebar
