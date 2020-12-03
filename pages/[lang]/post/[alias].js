import React, { useContext } from 'react'

import { useRouter } from 'next/router'

import { ItemsContext, LangContext } from 'context'
import { fetchItems } from 'initValues'
import { dropKeys } from 'utils/objects'
import { HtmlParser } from 'components/hard'

import {
	Container,
} from 'semantic-ui-react'

const Page = () => {
	const [state] = useContext(ItemsContext)
	const [ln] = useContext(LangContext)
	const router = useRouter()
	const post = state[router?.asPath]
	return (
		<Container text>
			<HtmlParser htmlString={post?.text} images={post?.images} />
		</Container>)
}

Page.getInitialProps = async ({ ctx }) => {
	const { alias, lang } = ctx.query
	
	const post = await fetchItems(`model?model=post&image=toFront&alias=${alias}&forlang=${lang}`)
	if (!post) return { statusCode: 404 }

	return {
		...post,
		headBackground: post?.image
	}
}

export default Page