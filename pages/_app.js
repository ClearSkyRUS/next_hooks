import React from 'react'
import App from 'next/app'

import 'semantic-ui-css/semantic.min.css'

import { Layout } from 'components/layouts'

import Context from 'context'

import { fetchItems } from 'initValues'
import strings from 'translations/strings'

let loadedPages = []

class MyApp extends App {

    static async getInitialProps({ Component, ctx, router }) {
        if (typeof window === 'undefined')
            loadedPages = []

        const { lang } = ctx.query
        let pageProps = {}

        if (Component.getInitialProps)
            if (!loadedPages.includes(ctx.asPath))
                pageProps = await Component.getInitialProps({ ctx })

        if (!loadedPages.includes(lang)) {
            // let lengStrings = await fetchItems(`strings/${lang === 'en' ? 1 : 2}`, false)
            let lengStrings = strings[lang]
            pageProps = { ...pageProps, [lang]: lengStrings }
        }


        return { pageProps }
    }

    render() {
        const { Component, pageProps, router } = this.props
        const { lang } = router.query

        if (!loadedPages.includes(router.asPath))
            loadedPages.push(router.asPath)

        if (!loadedPages.includes(lang))
            loadedPages.push(lang)

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