import {Icon, Menu} from "semantic-ui-react"

import {Logo, LangSwitcher} from "components/pureUi"

const MobileMenu = ({setIsSidebarVisible}) => (
	<>
		<Menu.Item>
			<Icon
				name="bars"
				onClick={(e) => setIsSidebarVisible(true)}
				size="large"
				style={{cursor: "pointer"}}
			/>
		</Menu.Item>
		<Menu.Item style={{marginLeft: "auto", marginRight: "auto"}}>
			<Logo />
		</Menu.Item>
		<Menu.Menu>
			<LangSwitcher />
		</Menu.Menu>
	</>
)

export default MobileMenu
