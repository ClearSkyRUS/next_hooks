import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { windowState } from 'initValues'

const useWindow = () => {
    const [isServer, setIsServer] = useState(windowState.isServer)
    const [isMobile, setIsMobile] = useState(windowState.isMobile)
    const [isStick, setIsStick] = useState(windowState.isStick)
    const [isSidebarVisible, setIsSidebarVisible] = useState(windowState.isSidebarVisible)
    const [swipeState, setSwipeState] = useState(windowState.swipeState)
    const router = useRouter()

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const resized = () => setIsMobile(window.innerWidth < 600)
            window.addEventListener('resize', resized)
            resized()
            setIsServer(typeof window === 'undefined')
            return () => window.removeEventListener('resize', resized)
        }
    }, [typeof window])

    useEffect(() => {
        setIsSidebarVisible(false)
    }, [router.asPath])

    const onSwipeMove = (position) => {
        let newSwipeState = {
            currentPos: position,
            startPos: (swipeState.startPos.x === -1 && swipeState.startPos.y === -1) ? position : swipeState.startPos
        }
        setSwipeState(newSwipeState)
    }

    const onSwipeEnd = () => {
        if (swipeState.currentPos.y - swipeState.startPos.y < 40 &&
            swipeState.startPos.y - swipeState.currentPos.y < 40) {
            if (!isSidebarVisible && swipeState.currentPos.x - swipeState.startPos.x > 50)
                setIsSidebarVisible(true)
            else if (isSidebarVisible && swipeState.startPos.x - swipeState.currentPos.x > 50)
                setIsSidebarVisible(false)
        }

        setSwipeState(windowState.swipeState)
    }

    return { isServer, isMobile, isStick, isSidebarVisible, setIsStick, setIsSidebarVisible, onSwipeMove, onSwipeEnd }
}

export default useWindow
