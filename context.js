import { useReducer, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'

import { itemsReducer } from 'reducers'

import { objHasProps } from 'utils/objects'

import { defaultLocale } from 'translations/config'

export const UserContext = React.createContext({})
export const ItemsContext = React.createContext({})
export const LangContext = React.createContext({})

const Context = ({ children, InitPageProps }) => {
    const [store, dispatch] = useReducer(itemsReducer, InitPageProps)
    if (InitPageProps && !objHasProps(store, InitPageProps))
        dispatch({ type: 'SET', payload: InitPageProps })


    const router = useRouter()
    const { lang } = router.query
    const [ln, setLn] = useState(lang ? lang : defaultLocale)
    useEffect(() => {
        setLn(lang ? lang : defaultLocale)
        localStorage.setItem('locale', lang)
    }, [lang])

    return (
        <UserContext.Provider value={{}}>
            <LangContext.Provider value={[ln, setLn]}>
                <ItemsContext.Provider value={[store, dispatch]}>
                    {children}
                </ItemsContext.Provider>
            </LangContext.Provider>
        </UserContext.Provider>
    )
}

export default Context