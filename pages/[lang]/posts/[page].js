import React, { useContext } from 'react'
import { useRouter } from 'next/router'

import {
	Container,
	Segment
} from 'semantic-ui-react'

import { ItemsContext } from 'context'
import { fetchItems } from 'initValues'
import { Pagination } from 'components/pureUi'
import { Posts } from 'components/collections'
import { dropKeys } from 'utils/objects'

const Page = () => {
	const [state] = useContext(ItemsContext)
	const router = useRouter()
	const pageData = state[router?.asPath] ? state[router?.asPath]?.docs : null
	const paginationData = state[router?.asPath]
	const link = router?.route
	const linkAs = router?.asPath.replace(`/${router?.query?.page}`, '')
	return (
		<Segment style={{ padding: '0em 0em' }} vertical>
			<Container text>
				<Posts docs={pageData} />
			</Container>
			<Container textAlign='center'>
				<Segment style={{ margin: '1em 0em 0em' }} vertical>
					<Pagination
						activePage={paginationData?.page}
						totalPages={paginationData?.totalPages}
						link={link}
						linkAs={linkAs}
					/>
				</Segment>
			</Container>
		</Segment>
	)
}

Page.getInitialProps = async ({ ctx }) => {
	const { page, lang } = ctx.query
	let populate = {
		path: 'title preview',
		select: { [lang]: 1 },
		populate: {
			path: lang,
			select: { text: 1, textHtml: 1, _id: 0 },
		}
	}
	const sort = { updatedAt: -1 }
	const posts = await fetchItems(`model?model=post&page=${page}&isActive=true&select=title alias preview image&populate=${JSON.stringify(populate)}&sort=${JSON.stringify(sort)}`)
	if (!posts || posts?.err || posts?.totalPages < posts?.page || !posts?.page) {
		return { statusCode: 404 }
	}
	dropKeys(posts.docs, 'title', [lang, 'text'])
	dropKeys(posts.docs, 'preview', [lang, 'textHtml'])
	populate = {
		path: 'title metaDesc',
		select: { _id: 1, [lang]: 1 },
		populate: {
			path: lang,
			select: { text: 1, _id: 0 },
		}
	}
	const postsPage = await fetchItems(`model?model=postsPage&action=findOne&isActive=true&populate=${JSON.stringify(populate)}`)
	dropKeys([postsPage], 'title', [lang, 'text'])
	dropKeys([postsPage], 'metaDesc', [lang, 'text'])
	return {
		...posts,
		...postsPage,
		headBackground: postsPage?.image,
	}
}

export default Page