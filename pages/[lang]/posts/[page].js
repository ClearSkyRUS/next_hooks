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
	const posts = await fetchItems(`model?model=post&image=toFrontList&page=${page}&forlang=${lang}`)
	if (!posts || posts?.err || posts?.totalPages < posts?.page || !posts?.page) return { statusCode: 404 }
	const postsPage = await fetchItems(`model?model=postsPage&image=toFront&forlang=${lang}`)
	return {
		...posts,
		...postsPage,
		headBackground: postsPage?.image,
	}
}

export default Page