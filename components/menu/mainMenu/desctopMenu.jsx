import { Menu } from 'semantic-ui-react'
import { Logo } from 'components/pureUi'

import { LangSwitcher, Link } from 'components/pureUi'

const DesctopMenu = ({ state, ln }) => {
    return (
        <>
            <Menu.Item>
                <Logo />
            </Menu.Item>
            {state.links ? state.links.mainMenu.map((el, key) =>
                <Menu.Item key={key}><Link link={el} ln={ln} >{state[ln] ? state[ln][el.ref] : ''}</Link></Menu.Item>
            ) : ''
            }
            <Menu.Menu position='right'>
                <LangSwitcher />
            </Menu.Menu>
        </>
    )
}

export default DesctopMenu