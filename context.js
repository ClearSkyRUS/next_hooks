import { useReducer } from 'react'

import { itemsReducer } from 'reducers'

import { objHasProps } from 'utils/objects'

export const UserContext = React.createContext({})
export const ItemsContext = React.createContext({})

const Context = ({ children, InitPageProps }) => {
    const [store, dispatch] = useReducer(itemsReducer, InitPageProps);
    if (InitPageProps && !objHasProps(store, InitPageProps))
        dispatch({ type: 'SET', payload: InitPageProps })

    return (
        <UserContext.Provider value={{}}>
            <ItemsContext.Provider value={[store, dispatch]}>
                {children}
            </ItemsContext.Provider>
        </UserContext.Provider>
    )
}

export default Context