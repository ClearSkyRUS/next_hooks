import React, { useEffect, useContext } from "react";

import Head from 'next/head'

import { useRouterControl } from 'hooks'

import { CircleLoader } from 'components/holders'

import { ItemsContext } from 'context'
import { getInitialLocale } from 'translations/getInitialLocale'

import { setHtmlLang } from 'utils/dom'

const Index = () => {
	const { setRouteFromLink } = useRouterControl()
	const [state] = useContext(ItemsContext)

	useEffect(() => {
		const lang = getInitialLocale(state.loaded?.langs)

		setHtmlLang(lang)

		setRouteFromLink(
			{
				href: '',
				as: '',
				abs: false
			},
			lang
		)
	})
	return (
		<>
			<Head>
				<meta name='robots' content='noindex, nofollow' />
			</Head>
			<CircleLoader style={{ height: '500px' }} />
		</>
	)
}

export default Index