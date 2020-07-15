import React from 'react'

import { fetchItems } from 'initValues'
import { dropKeys } from 'utils/objects'

import { MainPage } from 'components/views'
import { ItemsContext } from 'context'

const Page = () => {
	return <MainPage />
}

Page.getInitialProps = async ({ ctx, lang }) => {
	let populate = [
		{
			path: 'title metaDesc',
			select: { [lang]: 1, _id: 0 },
			populate: {
				path: lang,
				select: { text: 1, _id: 0 },
			}
		},
		{
			path: 'extra',
			select: { _id: 0, title: 1, text: 1 },
			populate: {
				path: 'title text',
				select: { [lang]: 1, _id: 0 },
				populate: {
					path: lang,
					select: { text: 1, _id: 0 },
				}
			}
		}
	]
	const mainPage = await fetchItems(`model?model=mainPage&action=findOne&isActive=true&populate=${JSON.stringify(populate)}`)
	dropKeys([mainPage], 'title', [lang, 'text'])
	dropKeys([mainPage], 'metaDesc', [lang, 'text'])
	populate = {
		path: 'title preview',
		select: { [lang]: 1, _id: 0 },
		populate: {
			path: lang,
			select: { text: 1, textHtml: 1, _id: 0 },
		}
	}
	const sort = { updatedAt: -1 }
	let posts = await fetchItems(`model?model=post&action=find&limit=3&isActive=true&select=title alias preview image&populate=${JSON.stringify(populate)}&sort=${JSON.stringify(sort)}`)
	dropKeys(posts, 'title', [lang, 'text'])
	dropKeys(posts, 'preview', [lang, 'textHtml'])
	return {
		...mainPage,
		headBackground: mainPage.image,
		posts: posts
	}
}

export default Page