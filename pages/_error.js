import React, { useEffect, useContext } from "react";

import Head from 'next/head'

import { loadSecondary } from './_app'

import { ItemsContext, LangContext } from 'context'

import { Header } from 'semantic-ui-react'

import { setHtmlLang } from 'utils/dom'

const Error = ({ statusCode }) => {
	const [state, dispatch] = useContext(ItemsContext)
	const [ln] = useContext(LangContext)

	useEffect(() => {
		loadSecondary(ln).then(props => {
			if (props)
				dispatch({ type: 'SET', payload: props })
		})
		setHtmlLang(ln)
	}, [ln])

	return (
		<>
			<Head>
				<meta name='robots' content='noindex, nofollow' />
			</Head>
			<Header textAlign='center'>{state?.[ln || 'en']?.[statusCode]}</Header>
		</>
	)
}

export default Error