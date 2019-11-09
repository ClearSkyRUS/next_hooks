import React, { useEffect, useLayoutEffect, useState } from 'react'

import { windowState } from 'initValues'

const useWindow = () => {
    const [isServer, setIsServer] = useState(windowState.isServer);
    const [isMobile, setIsMobile] = useState(windowState.isMobile);
    const [isStick, setIsStick] = useState(windowState.isStick)
    const [isSidebarVisible, setIsSidebarVisible] = useState(windowState.isSidebarVisible);
    useEffect(() => {
        setIsServer(typeof window === 'undefined')
    }, [typeof window])

    useEffect(() => {
        if (!isServer) {
            const resized = () => setIsMobile(window.innerWidth < 600)
            window.addEventListener('resize', resized);
            resized();
            return () => window.removeEventListener('resize', resized);
        }
    }, [isServer]);

    return { isServer, isMobile, isStick, isSidebarVisible, setIsStick, setIsSidebarVisible };
}

export default useWindow
