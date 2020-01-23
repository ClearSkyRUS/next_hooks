import Router from 'next/router'
import { useRouter } from 'next/router'
import { useEffect, useContext } from 'react'

import { LangContext } from 'context'

import { Dropdown } from 'semantic-ui-react'

import { languageNames } from 'translations/config'


const LangSwitcher = () => {
    const router = useRouter()
    const [ln, setLn] = useContext(LangContext)
    const handleClick = langClick => {
        router.push(router.pathname, router.asPath.replace(`/${ln}`, `/${langClick}`))
    }
    return (
        <Dropdown text={languageNames[ln]} pointing className='link item'>
            <Dropdown.Menu>
                {Object.keys(languageNames).map(key => (
                    key === ln ? '' : <Dropdown.Item key={key} onClick={e => handleClick(key)}>{languageNames[key]}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default LangSwitcher