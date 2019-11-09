import React, { useContext } from 'react'

import { useRouter } from 'next/router'

import { ItemsContext } from 'context'
import { fetchItems } from 'initValues'

const Page = () => {
    const [state, dispatch] = useContext(ItemsContext)
    const router = useRouter()
    const { id } = router.query
    const post = state.fullPosts && state.fullPosts[id] ? state.fullPosts[id] : null
    console.log(state)
    return (
        <div>
            {post ?
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.text}</p>
                </div>
                : ''}
        </div>)
}

Page.getInitialProps = async ({ ctx, router }) => {
    const { id } = ctx.query
    console.log('PagePosts[id].getInitialProps!: ' + id)
    const post = await fetchItems(`posts/${id}`, false)
    return { fullPosts: { [id]: post } }
}

export default Page