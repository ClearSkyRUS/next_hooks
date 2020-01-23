import { useEffect } from 'react'
import Router from 'next/router'

import Head from 'next/head'
import { getInitialLocale } from 'translations/getInitialLocale'

import { CircleLoader } from 'components/holders'

const Index = () => {
    useEffect(() => {
        Router.replace('/[lang]', `/${getInitialLocale()}`)
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