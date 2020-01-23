import { useContext } from 'react'
import Link from 'next/link'

import { LangContext } from 'context'

import { Image } from 'semantic-ui-react'

const Logo = ({ centered }) => {
    const [ln, setLn] = useContext(LangContext)
    return (
        <div className='flex' >
            <Link href='/[lang]/' as={`/${ln}`} >
                <a className={centered ? 'centered' : 'regular'}><Image size='mini' src='/assets/img/logo.png' /></a>
            </Link>
        </div>
    )
}

export default Logo
