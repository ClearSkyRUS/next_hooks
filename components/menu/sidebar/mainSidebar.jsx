import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

import { MainLinks } from 'components/menu'

const MainSidebar = ({ isSidebarVisible, isMobile, setIsSidebarVisible }) => (
    <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        onHide={() => setIsSidebarVisible(false)}
        inverted
        vertical
        visible={isMobile && isSidebarVisible}
        style={{ position: 'fixed', width: '250px' }}
    >
        <MainLinks />
    </Sidebar>
)

export default MainSidebar