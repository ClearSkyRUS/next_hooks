import { useRouter } from 'next/router'
import { useContext } from "react";

import { LangContext } from 'context'

const useRouterControl = () => {
	const router = useRouter()
	const [ln] = useContext(LangContext)

	const setRouteFromLink = (
		link = {
			href: '',
			as: '',
			abs: false
		},
		customLang
	) => {
		router.replace(link.abs ? link.href : `/[lang]${link.href}`, link.abs ? link.as : `/${customLang || ln}${link.as}`)
	}

	return { setRouteFromLink }
}

export default useRouterControl
