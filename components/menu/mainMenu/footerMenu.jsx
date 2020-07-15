import {useRouter} from "next/router"
import {Menu} from "semantic-ui-react"
import {useRouterControl} from "hooks"

import {Link} from "components/pureUi"

const FooterMenu = ({state, ln}) => {
	const router = useRouter()
	const {setRouteFromLink} = useRouterControl()
	const menu = state[`menus${ln}`]?.find((menu) => menu.name === "footerMenu")
	return (
		<>
			<Menu text vertical className="footerMenu">
				<Menu.Item header>{menu?.title}</Menu.Item>
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
			</Menu>
		</>
	)
}

export default FooterMenu
