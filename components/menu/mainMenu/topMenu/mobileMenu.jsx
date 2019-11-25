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

import { LangSwitcher } from 'components/menu'

const MobileMenu = ({ setIsSidebarVisible }) => (
    <>
        <Menu.Item style={{ marginRight: 'auto' }} >
            <Icon name='bars' onClick={e => setIsSidebarVisible(true)} size='large' style={{ cursor: 'pointer' }} />
        </Menu.Item>
        <Menu.Item style={{ marginLeft: '32px' }}>
            <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Menu style={{ marginLeft: 'auto' }} position='right'>
            <LangSwitcher />
        </Menu.Menu>
    </>
)

export default MobileMenu