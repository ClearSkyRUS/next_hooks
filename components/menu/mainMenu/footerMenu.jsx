import { Header, List } from 'semantic-ui-react'

import { Link } from 'components/pureUi'

const FooterMenu = ({ state, ln }) => {
    return (
        <>
            <Header as='h4' content={state[ln] ? state[ln]['links'] : ''} />
            <List link >
                {state.links ? state.links.mainMenu.map((el, key) =>
                    <List.Item key={key} className='centeredMinWidth'><Link link={el} ln={ln} >{state[ln] ? state[ln][el.ref] : ''}</Link></List.Item>
                ) : ''}
            </List>
        </>
    )
}

export default FooterMenu