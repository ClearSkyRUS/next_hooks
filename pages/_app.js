import React from 'react'
import App from 'next/app'

import 'semantic-ui-css/semantic.min.css'

import { Layout } from 'controlers'

import Context from 'context'

let loadedPages = [];

class MyApp extends App {

    static async getInitialProps({ Component, ctx, router }) {
        if (typeof window === 'undefined')
            loadedPages = []

        let pageProps;

        if (Component.getInitialProps)
            if (!loadedPages.includes(ctx.asPath))
                pageProps = await Component.getInitialProps({ ctx })
        return { pageProps }
    }

    render() {
        const { Component, pageProps, router } = this.props
        if (!loadedPages.includes(router.asPath))
            loadedPages.push(router.asPath)

        console.log(loadedPages)
        return (
            <Context InitPageProps={pageProps}>
                <Layout>
                    <Component />
                </Layout>
            </Context>
        )
    }
}

export default MyApp