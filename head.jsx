import React, {useContext} from "react"
import {useRouter} from "next/router"
import {ItemsContext, LangContext} from "context"

import Head from "next/head"
import {asTitle} from "utils/strings"

export default () => {
	const router = useRouter()
	const [state] = useContext(ItemsContext)
	const [ln] = useContext(LangContext)
	const title = state[router?.asPath]?.title
		? `${asTitle(state[router?.asPath].title)} - ${state.config?.siteName}`
		: state.config?.siteName || ""
	const langs = state.loaded?.langs
	return (
		<Head>
			<title>{title}</title>
			{state[router?.asPath]?.metaDesc ? (
				<meta
					name="description"
					content={state[router?.asPath]?.metaDesc}
				></meta>
			) : null}
			{langs?.length > 1
				? langs?.map((lang) => (
						<link
							rel="alternate"
							key={lang.sign}
							href={`${state.config?.host}${router?.asPath.replace(
								`/${ln}`,
								`/${lang.sign}`
							)}`}
							hrefLang={lang.sign}
						/>
				  ))
				: null}
			<link rel="stylesheet" type="text/css" href="/assets/css/nprogress.css" />
		</Head>
	)
}
