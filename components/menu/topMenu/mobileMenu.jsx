import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Loader,
    Button
} from 'semantic-ui-react'

const MobileMenu = ({ setIsSidebarVisible }) => (
    <>
        <Menu.Item>
            <Icon name='bars' onClick={e => setIsSidebarVisible(true)} size='large' style={{ cursor: 'pointer' }} />
        </Menu.Item>
        <Menu.Item>
            <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item header>Project Name</Menu.Item>
        <Menu.Item as='a'>Blog</Menu.Item>
        <Menu.Item as='a'>Articles</Menu.Item>

        <Menu.Menu position='right'>
        </Menu.Menu>
    </>
)

export default MobileMenu