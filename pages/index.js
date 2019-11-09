import React, { useContext } from 'react'

import { ItemsContext } from 'context'
import { fetchItems } from 'initValues'

const Page = () => {
  const [state, dispatch] = useContext(ItemsContext)
  console.log(state)
  return (
    <div>
      <div>Next stars: {state.stars}</div>
    </div>)
}

Page.getInitialProps = async () => {
  console.log('Page.getInitialProps!')
  return { stars: 10 }
}

export default Page