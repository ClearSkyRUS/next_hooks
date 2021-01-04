import React from 'react'
import App from 'next/app'

import Root from 'root'
import NProgress from 'nprogress'
import Router from 'next/router'

import 'styles/semantic.less'
import 'styles/custom/main.less'
import 'styles/custom/nprogress.less'

import { fetchItems } from 'initValues'

import { pluck, dropKeys } from 'utils/objects'

import { animateScroll as scroll } from 'react-scroll'

import { getInitialLocale } from 'translations/getInitialLocale'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', url => {
	NProgress.done()
	scroll.scrollToTop({
		smooth: "easeOutCubic"
	})
})
Router.events.on('routeChangeError', () => {
	NProgress.done()
	scroll.scrollToTop()
})

let loaded = {}

class MyApp extends App {

	static async getInitialProps({ Component, ctx, router }) {
		const isServer = typeof window === 'undefined'
		if (isServer) {
			loaded = {
				langs: [],
				pages: [],
				logo: null,
				currentLang: null
			}
		}

		const { lang } = ctx.query
		const { pathname } = ctx
		loaded.page = ctx.asPath
		let pageProps = {
			[loaded.page]: {}
		}

		if (!loaded.logo) {
			loaded.logo = await fetchItems(`model?model=logo&image=findOne&isActive=true`)
			pageProps = { ...pageProps, logo: loaded.logo?.image }
		}

		if (!loaded.config) {
			loaded.config = await fetchItems(`model?model=config&image=findOne&isActive=true`)
			pageProps = { ...pageProps, config: loaded.config }
			if (ctx.res) ctx.res.config = loaded.config
		}

		if (!Array.isArray(loaded.langs) || loaded.langs.length === 0) {
			const langs = await fetchItems(`model?model=lang&image=withFullSign&isActive=true`)
			loaded.langs = langs
			if (ctx.res) ctx.res.locals = loaded.langs
		}

		if ((!lang && pathname !== '/' && pathname !== '/sitemap.xml') ||
			(lang && Array.isArray(loaded.langs) && !loaded.langs.find(obj => obj.sign === lang))) {
			loaded.pages.push(loaded.page)
			pageProps = {
				...pageProps,
				[loaded.page]: { statusCode: 404 }
			}
		}

		if (Component.getInitialProps) {
			if (!loaded.pages.includes(loaded.page)) {
				pageProps = { ...pageProps, [ctx.asPath]: (await Component.getInitialProps({ ctx, lang })) }
				loaded.pages.push(loaded.page)
			}
		}

		loaded.currentLang = loaded?.langs?.find(obj => obj.sign === lang)?.sign ||
			getInitialLocale(loaded?.langs)

		await loadSecondary(loaded.currentLang).then(props => pageProps = { ...pageProps, ...props })

		if (isServer)
			pageProps = { ...pageProps, loaded: loaded }
		return { pageProps }
	}

	render() {
		const { Component, pageProps } = this.props
		if (pageProps.loaded) loaded = pageProps.loaded

		return (
			<Root
				Component={Component}
				pageProps={pageProps}
				lang={loaded.currentLang}
				loaded={loaded}
			/>
		)
	}
}

export const loadSecondary = (
	lang
) => {
	return new Promise(async (resolve, reject) => {
		const props = {}
		if (!loaded.pages.includes(lang)) {
			let lengStrings = await fetchItems(`model?model=string&image=toFront&forlang=${lang}`)
			lengStrings = pluck(lengStrings, 'sign', 'text')
			props[lang] = lengStrings
			loaded.pages.push(lang)
		}

		if (!loaded.pages.includes(`menus${lang}`)) {
			const menus = await fetchItems(`model?model=menu&image=toFront&forlang=${lang}`)
			if (menus) {
				for (let menu of menus) {
					dropKeys(menu.links, 'sign', [lang, 'text'])
				}
				props[`menus${lang}`] = menus
				loaded.pages.push(`menus${lang}`)
			}
		}
		resolve(props)
	})
}

export default MyApp