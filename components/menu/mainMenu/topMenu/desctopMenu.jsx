import Link from 'next/link'

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

import { LangSwitcher, MainLinks } from 'components/menu'

const DesctopMenu = () => (
    <>
        <Menu.Item>
            <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item header>Project Name</Menu.Item>

        <MainLinks />

        <Menu.Menu position='right'>
            <LangSwitcher />
        </Menu.Menu>
    </>
)

export default DesctopMenu