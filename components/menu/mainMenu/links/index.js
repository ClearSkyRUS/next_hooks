import React, { useContext } from 'react'

import { ItemsContext, LangContext } from 'context'

import Link from 'next/link'
import { Menu } from 'semantic-ui-react'

const MainLinks = () => {
    const [state, dispatch] = useContext(ItemsContext)
    const [ln, setLn] = useContext(LangContext)
    return (
        <>
            <Menu.Item><Link href='/[lang]/' as={`/${ln}`}><a>{state[ln] ? state[ln].home : ''}</a></Link></Menu.Item>
            <Menu.Item><Link href='/[lang]/posts' as={`/${ln}/posts`}><a>Blog</a></Link></Menu.Item>
        </>
    )
}

export default MainLinks