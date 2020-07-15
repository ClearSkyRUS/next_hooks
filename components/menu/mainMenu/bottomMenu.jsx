import {useRouter} from "next/router"
import {Menu} from "semantic-ui-react"

import {Link} from "components/pureUi"

const BottomMenu = ({state, ln}) => {
	const router = useRouter()
	return (
		<Menu text vertical size="small">
			{state.menus?.bottomMenu?.map((el, key) => (
				<Menu.Item
					key={key}
					active={
						!el.abs
							? `/[lang]${el.href}` === router?.route ||
							  `/[lang]${el.href}` === `${router?.route}/`
							: el.href === router?.route || el.href === `${router?.route}/`
					}
				>
					<Link link={el} ln={ln}>
						{state[ln] ? state[ln][el.sign.sign] : ""}
					</Link>
				</Menu.Item>
			))}
		</Menu>
	)
}

export default BottomMenu
