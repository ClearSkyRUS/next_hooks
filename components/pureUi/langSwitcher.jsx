import {useRouter} from "next/router"
import {useContext} from "react"
import {useRouterControl} from "hooks"

import {LangContext, ItemsContext} from "context"

import {Dropdown} from "semantic-ui-react"

import {setHtmlLang} from "utils/dom"

const LangSwitcher = () => {
	const router = useRouter()
	const [state] = useContext(ItemsContext)
	const [ln] = useContext(LangContext)
	const {setRouteFromLink} = useRouterControl()
	const currentLang = state.loaded?.langs?.find((obj) => obj.sign === ln)
		?.fullSign.text
	const currentQuerryLang = router?.query?.lang
	const handleLangChange = (sign) => {
		setHtmlLang(sign)
		setRouteFromLink({
			abs: true,
			href: router.pathname,
			as: router.asPath.replace(`/${currentQuerryLang}`, `/${sign}`)
		})
	}

	if (state.loaded?.langs?.length > 1)
		return (
			<Dropdown text={currentLang} pointing className="link item capitalize">
				<Dropdown.Menu>
					{state.loaded?.langs?.map((lang) =>
						lang.sign === ln ? (
							""
						) : (
							<Dropdown.Item
								key={lang.sign}
								onClick={() => handleLangChange(lang.sign)}
							>
								<p className="capitalize">{lang.fullSign.text}</p>
							</Dropdown.Item>
						)
					)}
				</Dropdown.Menu>
			</Dropdown>
		)

	return <div style={{width: "60px"}}></div>
}

export default LangSwitcher
