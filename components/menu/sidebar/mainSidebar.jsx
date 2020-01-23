import { Menu, Sidebar } from 'semantic-ui-react'

import { Link } from 'components/pureUi'

const MainSidebar = ({ state, ln, isSidebarVisible, isMobile, setIsSidebarVisible }) => (
    <Sidebar
        as={Menu}
        id='sidebar'
        animation='overlay'
        icon='labeled'
        onHide={() => setIsSidebarVisible(false)}
        vertical
        visible={isMobile && isSidebarVisible}
    >
        {state.links ? state.links.mainMenu.map((el, key) =>
            <Menu.Item key={key}><Link link={el} ln={ln}>{state[ln] ? state[ln][el.ref] : ''}</Link></Menu.Item>
        ) : ''
        }
    </Sidebar>
)

export default MainSidebar