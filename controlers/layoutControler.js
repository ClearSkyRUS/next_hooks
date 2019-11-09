import react, { useContext, useState } from 'react'

import { useWindow } from 'hooks'

import { MainLayout } from 'components/layouts'

const Layout = ({ children }) => {
    const state = useWindow()
    return (
        <MainLayout state={state}>
            {children}
        </MainLayout>
    )
}

export default Layout