import React from 'react'

import { fetchItems } from 'initValues'
import { dropKeys } from 'utils/objects'

import { MainPage } from 'components/views'
import { ItemsContext } from 'context'

const Page = () => {
	return <MainPage />
}

Page.getInitialProps = async ({ ctx, lang }) => {
	const mainPage = await fetchItems(`model?model=mainPage&image=toFront&forlang=${lang}`)
	const posts = await fetchItems(`model?model=post&image=mainPageList&forlang=${lang}`)

	return {
		...mainPage,
		headBackground: mainPage.image,
		posts: posts
	}
}

export default Page