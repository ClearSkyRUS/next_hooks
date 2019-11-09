import React, { useContext } from 'react'

import Link from 'next/link'

import { ItemsContext } from 'context'
import { fetchItems } from 'initValues'

const Page = () => {
    const [state, dispatch] = useContext(ItemsContext)
    console.log(state)
    return (
        <div>
            {state.posts ? state.posts.map((el, key) => (
                <div key={key}>
                    <h1><Link href='/posts/[id]' as={`/posts/${el.id}`}><a>{el.title}</a></Link></h1>
                    <p>{el.text}</p>
                </div>
            )) : ''}
        </div>)
}

Page.getInitialProps = async () => {
    console.log('PageBlog.getInitialProps!')
    const posts = await fetchItems('posts', false)
    return { posts: posts }
}

export default Page