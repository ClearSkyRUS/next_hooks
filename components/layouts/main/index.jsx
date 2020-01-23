import { useWindow } from 'hooks'
import { useContext } from 'react'

import { ItemsContext, LangContext } from 'context'

import Swipe from 'react-easy-swipe';
import Header from './header'
import Footer from './footer'
import { MainSidebar } from 'components/menu'

import { Sidebar, Segment } from 'semantic-ui-react'

const MainLayout = ({ children }) => {
    const windowContext = useWindow()
    const [state, dispatch] = useContext(ItemsContext)
    const [ln, setLn] = useContext(LangContext)
    return (
        <>
            <Swipe onSwipeMove={position => windowContext.onSwipeMove(position)} onSwipeEnd={() => windowContext.onSwipeEnd()}>
                <Sidebar.Pushable style={{ transform: 'none', minHeight: '100vh' }} as={Segment}>
                    {windowContext.isMobile ? <MainSidebar state={state} ln={ln} {...windowContext} /> : ''}
                    <Sidebar.Pusher dimmed={windowContext.isMobile && windowContext.isSidebarVisible}>
                        <div id='wrapper'>
                            <Header {...windowContext} state={state} ln={ln} />
                            <div id='content'>
                                {children}
                            </div>
                            <Footer state={state} ln={ln} />
                        </div>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Swipe>
        </>
    )
}

export default MainLayout