import React, { useContext } from 'react'

import { useRouter } from 'next/router'

import { ItemsContext, LangContext } from 'context'
import { fetchItems } from 'initValues'

const Page = () => {
    const [state, dispatch] = useContext(ItemsContext)
    const [ln, setLn] = useContext(LangContext)
    const router = useRouter()
    const { id } = router.query
    const post = state.fullPosts && state.fullPosts[id] ? state.fullPosts[id] : null
    return (
        <div>
            {post ?
                <div>
                    <h1>{post[ln].title}</h1>
                    <p>{post[ln].text}</p>
                </div>
                : ''}
        </div>)
}

Page.getInitialProps = async ({ ctx, router }) => {
    const { id } = ctx.query
    const post = await fetchItems(`posts/${id}`, false)
    return { fullPosts: { [id]: post } }
}

export default Page