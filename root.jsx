import React from "react"
import {useRouter} from "next/router"

import Context from "context"
import {Layout} from "components/layouts"
import Error from "pages/_error"
import Head from "head"
import {getInitialLocale} from "translations/getInitialLocale"

export default ({Component, pageProps, lang, loaded}) => {
	const router = useRouter()
	const isServer = typeof window === "undefined"
	const code = pageProps[router?.asPath]?.statusCode || 200
	if (code !== 200) {
		pageProps[router?.asPath] = {
			...pageProps[router?.asPath],
			title: code.toString()
		}
		if (!isServer) lang = getInitialLocale(loaded?.langs)
	}
	return (
		<Context InitPageProps={pageProps} lang={lang}>
			<Head />
			<Layout>
				{code !== 200 ? <Error statusCode={code} /> : <Component />}
			</Layout>
		</Context>
	)
}
