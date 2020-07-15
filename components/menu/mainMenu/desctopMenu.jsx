import {useRouter} from "next/router"
import {useRouterControl} from "hooks"

import {Menu} from "semantic-ui-react"
import {Logo} from "components/pureUi"

import {LangSwitcher} from "components/pureUi"

const DesctopMenu = ({state, ln}) => {
	const router = useRouter()
	const {setRouteFromLink} = useRouterControl()
	const menu = state[`menus${ln}`]?.find((menu) => menu.name === "mainMenu")
	return (
		<>
			<Menu.Item>
				<Logo />
			</Menu.Item>
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
			<Menu.Menu position="right">
				<LangSwitcher />
			</Menu.Menu>
		</>
	)
}

export default DesctopMenu
