import React, { useContext } from 'react'

import { ItemsContext } from 'context'
import { fetchItems } from 'initValues'

const Page = () => {
  const [state, dispatch] = useContext(ItemsContext)
  return (
    <div>
      <div>Next stars: {state.stars}</div>
    </div>)
}

Page.getInitialProps = async () => {
  return { stars: 10 }
}

export default Page