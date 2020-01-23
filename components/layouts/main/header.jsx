import 'style/components/menu.css'

import {
    Menu,
    Visibility,
    Container,
    Header
} from 'semantic-ui-react'

import { DesctopTopMenu, MobileTopMenu } from 'components/menu'
import { CircleLoader } from 'components/holders'
import { Head } from 'components/pureUi'

const PageHead = ({ state, ln, isStick, isMobile, isServer, setIsStick, setIsSidebarVisible }) => (
    <div id="header">
        <div className="mainPage" style={{
            background: 'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255)), url(/assets/img/head.jpg)',
            backgroundSize: 'cover'
        }}>
            <Container text style={{ padding: '10px', paddingTop: '2em' }}>
                <Header as='h1'>{state[ln] ? state[ln].headText.header : ''}</Header>
                <p>{state[ln] ? state[ln].headText.text : ''}</p>
            </Container>
        </div>
        <Visibility
            onTopPassed={e => setIsStick(true)}
            onTopVisible={e => setIsStick(false)}
            once={false}
        >
            <div className={isStick ? 'menuTop' : 'menuTopHolder'} />
            <Menu
                borderless
                className={isStick ? 'menuTopFixed' : 'menuTop'}
                fixed={isStick ? 'top' : undefined}
            >
                {!isServer ? (isMobile ? <MobileTopMenu setIsSidebarVisible={setIsSidebarVisible} /> : <DesctopTopMenu state={state} ln={ln} />) : <CircleLoader />}
            </Menu>
        </Visibility>
    </div>
)


export default PageHead