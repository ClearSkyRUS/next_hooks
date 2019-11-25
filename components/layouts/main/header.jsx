import { headerStyle } from 'style'

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

import { DesctopTopMenu, MobileTopMenu } from 'components/menu'
import { CircleLoader } from 'components/holders'

const PageHead = ({ isStick, isMobile, isServer, setIsStick, setIsSidebarVisible }) => (
    <>
        <Container text style={{ marginTop: '2em' }}>
            <Header as='h1'>Sticky Example</Header>
            <p>
                This example shows how to use lazy loaded images, a sticky menu, and a simple text
                container
          </p>
        </Container>
        <Visibility
            onTopPassed={e => setIsStick(true)}
            onTopVisible={e => setIsStick(false)}
            once={false}
        >
            <div style={isStick ? headerStyle.menuStyle : { display: 'none' }} />
            <Menu
                borderless
                fixed={isStick ? 'top' : undefined}
                style={isStick ? headerStyle.fixedMenuStyle : headerStyle.menuStyle}
            >
                {!isServer ? (isMobile ? <MobileTopMenu setIsSidebarVisible={setIsSidebarVisible} /> : <DesctopTopMenu />) : <CircleLoader />}
            </Menu>
        </Visibility>
    </>)


export default PageHead