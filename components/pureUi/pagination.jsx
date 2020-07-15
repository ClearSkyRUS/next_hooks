import React, {useContext} from "react"
import {ItemsContext} from "context"
import {useRouter} from "next/router"

import Head from "next/head"

import {Pagination} from "semantic-ui-react"

const CustomPagination = ({activePage = 1, totalPages = 1, link, linkAs}) => {
	const router = useRouter()
	const [state] = useContext(ItemsContext)
	const handlePaginationChange = (e, {activePage}) => {
		router
			.push(link, `${linkAs}/${activePage}`)
			.then(() => window.scrollTo(0, 0))
	}
	return (
		<>
			<Head>
				{activePage === 1 ? null : (
					<link
						rel="prev"
						href={`${state.config?.host}/${linkAs}/${activePage - 1}`}
					/>
				)}
				{activePage >= totalPages ? null : (
					<link
						rel="next"
						href={`${state.config?.host}/${linkAs}/${activePage + 1}`}
					/>
				)}
			</Head>
			<Pagination
				activePage={activePage}
				firstItem={null}
				lastItem={null}
				onPageChange={handlePaginationChange}
				pointing
				secondary
				totalPages={totalPages}
			/>
		</>
	)
}

export default CustomPagination
