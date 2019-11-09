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

const DesctopMenu = () => (
    <>
        <Menu.Item>
            <Image size='mini' src='https://react.semantic-ui.com/logo.png' />
        </Menu.Item>
        <Menu.Item header>Project Name</Menu.Item>
        <Menu.Item><Link href="/"><a>Home</a></Link></Menu.Item>
        <Menu.Item><Link href="/posts"><a>Blog</a></Link></Menu.Item>

        <Menu.Menu position='right'>
            <Dropdown text='Dropdown' pointing className='link item'>
                <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Header Item</Dropdown.Header>
                    <Dropdown.Item>
                        <i className='dropdown icon' />
                        <span className='text'>Submenu</span>
                        <Dropdown.Menu>
                            <Dropdown.Item>List Item</Dropdown.Item>
                            <Dropdown.Item>List Item</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Menu>
    </>
)

export default DesctopMenu