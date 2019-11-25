import { useWindow } from 'hooks'

import Swipe from 'react-easy-swipe';

import Header from './header'
import Footer from './footer'
import { MainSidebar } from 'components/menu'

import { Sidebar, Segment } from 'semantic-ui-react'

const MainLayout = ({ children }) => {
    const windowContext = useWindow()

    return (
        <>
            <Swipe onSwipeMove={position => windowContext.onSwipeMove(position)} onSwipeEnd={() => windowContext.onSwipeEnd()}>
                <Sidebar.Pushable style={{ transform: 'none' }} as={Segment}>
                    {windowContext.isMobile ? <MainSidebar {...windowContext} /> : ''}
                    <Sidebar.Pusher dimmed={windowContext.isMobile && windowContext.isSidebarVisible}>
                        <Header {...windowContext} />
                        <div className="content">
                            {children}
                        </div>
                        <Footer />
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Swipe>
        </>
    )
}

export default MainLayout