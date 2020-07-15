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
	let populate = {
		path: 'title metaDesc text preview',
		select: { [lang]: 1 },
		populate: {
			path: lang,
			select: { text: 1, textHtml: 1, _id: 0 },
		}
	}
	let post = await fetchItems(`model?model=post&action=findOne&alias=${alias}&select=title metaDesc alias text preview images image&populate=${JSON.stringify(populate)}`)
	if (!post) return { statusCode: 404 }

	dropKeys([post], 'title', [lang, 'text'])
	dropKeys([post], 'metaDesc', [lang, 'text'])
	dropKeys([post], 'text', [lang, 'textHtml'])
	dropKeys([post], 'preview', [lang, 'textHtml'])

	return {
		...post,
		headBackground: post?.image
	}
}

export default Page