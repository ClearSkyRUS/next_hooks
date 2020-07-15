import {useReducer, useState, useEffect} from "react"
import cookie from "js-cookie"

import {getInitialLocale} from "translations/getInitialLocale"
import {itemsReducer} from "reducers"

import {objHasProps} from "utils/objects"

export const UserContext = React.createContext({})
export const ItemsContext = React.createContext({})
export const LangContext = React.createContext({})

const Context = ({children, InitPageProps, lang}) => {
	const [store, dispatch] = useReducer(itemsReducer, InitPageProps)
	if (InitPageProps && !objHasProps(store, InitPageProps))
		dispatch({type: "SET", payload: InitPageProps})

	const [ln, setLn] = useState(lang)
	useEffect(() => {
		setLn(lang)
		localStorage?.setItem("locale", lang)
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
