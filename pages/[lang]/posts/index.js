import { useEffect } from 'react'
import { useRouter } from 'next/router'

import Head from 'next/head'

import { CircleLoader } from 'components/holders'

const Index = () => {
	const router = useRouter()
	useEffect(() => {
		router.replace(`${router.route}/[page]`, `${router.asPath}/1`)
	}, [])
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