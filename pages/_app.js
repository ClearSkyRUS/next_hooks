import React from 'react'
import App from 'next/app'

import 'semantic-ui-css/semantic.min.css'
import 'style/main.css'

import { Layout } from 'components/layouts'
import { Progress } from 'semantic-ui-react'

import Context from 'context'
import NProgress from 'nprogress'
import Router from 'next/router'

import { fetchItems } from 'initValues'
import strings from 'translations/strings'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

let loadedPages = []

class MyApp extends App {

    static async getInitialProps({ Component, ctx, router }) {
        if (typeof window === 'undefined')
            loadedPages = []

        const { lang } = ctx.query
        let pageProps = {}

        if (Component.getInitialProps) {
            if (!loadedPages.includes(ctx.asPath)) {
                pageProps = await Component.getInitialProps({ ctx })
                loadedPages.push(router.asPath)
            }
        }
        if (lang && !loadedPages.includes(lang)) {
            // let lengStrings = await fetchItems(`strings/${lang === 'en' ? 1 : 2}`, false)
            let lengStrings = strings[lang]
            pageProps = { ...pageProps, [lang]: lengStrings }
            loadedPages.push(lang)
        }
        if (!loadedPages.includes('links')) {
            // let lengStrings = await fetchItems(`strings/${lang === 'en' ? 1 : 2}`, false)
            let links = strings.links
            pageProps = { ...pageProps, links: links }
            loadedPages.push('links')
        }
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props

        return (
            <Context InitPageProps={pageProps} >
                <Layout>
                    <Component />
                </Layout>
            </Context>
        )
    }
}

export default MyApp