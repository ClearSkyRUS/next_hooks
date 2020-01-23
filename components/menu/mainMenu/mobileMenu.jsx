import { Icon, Menu } from 'semantic-ui-react'

import { Logo, LangSwitcher } from 'components/pureUi'

const MobileMenu = ({ setIsSidebarVisible }) => (
    <>
        <Menu.Item style={{ marginRight: 'auto' }} >
            <Icon name='bars' onClick={e => setIsSidebarVisible(true)} size='large' style={{ cursor: 'pointer' }} />
        </Menu.Item>
        <Menu.Item style={{ marginLeft: '32px' }}>
            <Logo />
        </Menu.Item>
        <Menu.Menu style={{ marginLeft: 'auto' }} position='right'>
            <LangSwitcher />
        </Menu.Menu>
    </>
)

export default MobileMenu