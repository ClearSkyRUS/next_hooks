import React, { useContext } from 'react'

import { ItemsContext } from 'context'
import { fetchItems } from 'initValues'

import { MainPage } from 'components/views'

const Page = () => {
  const [state, dispatch] = useContext(ItemsContext)
  return ( <MainPage />)
}

Page.getInitialProps = async () => {
  return { stars: 10 }
}

export default Page