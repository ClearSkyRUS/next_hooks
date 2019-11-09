import Header from './header'
import Footer from './footer'
import { MainSidebar } from 'components/menu'

import { Sidebar, Segment } from 'semantic-ui-react'

const MainLayout = ({ state, children }) => (
    <>
        <Sidebar.Pushable style={{ transform: 'none' }} as={Segment}>
            {state.isMobile ? <MainSidebar {...state} /> : ''}
            <Sidebar.Pusher dimmed={state.isMobile && state.isSidebarVisible}>
                <Header {...state} />
                <div className="content">
                    {children}
                </div>
                <Footer />
            </Sidebar.Pusher>
        </Sidebar.Pushable>
    </>
)

export default MainLayout;