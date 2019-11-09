import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const MainSidebar = ({ isSidebarVisible, isMobile, setIsSidebarVisible }) => (
    <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        onHide={() => setIsSidebarVisible(false)}
        inverted
        vertical
        visible={isMobile && isSidebarVisible}
        // width='thin'
        style={{ position: 'fixed', width: '250px' }}
    >
        <Menu.Item as='a'>
            <Icon name='home' />
            Home
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='gamepad' />
            Games
        </Menu.Item>
        <Menu.Item as='a'>
            <Icon name='camera' />
            Channels
        </Menu.Item>
    </Sidebar>
)

export default MainSidebar