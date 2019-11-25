import React, { useContext } from 'react'

import Link from 'next/link'

import { ItemsContext, LangContext } from 'context'
import { fetchItems } from 'initValues'

const Page = () => {
    const [state, dispatch] = useContext(ItemsContext)
    const [ln, setLn] = useContext(LangContext)
    return (
        <div>
            {state.posts ? state.posts.map((el, key) => (
                <div key={key}>
                    <h1><Link href='/[lang]/posts/[id]' as={`/${ln}/posts/${el.id}`}><a>{el[ln].title}</a></Link></h1>
                    <p>{el[ln].text}</p>
                </div>
            )) : ''}
        </div>)
}

Page.getInitialProps = async () => {
    const posts = await fetchItems('posts', false)
    return { posts: posts }
}

export default Page