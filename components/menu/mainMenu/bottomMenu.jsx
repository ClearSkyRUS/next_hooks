import { List } from 'semantic-ui-react'

import { Link } from 'components/pureUi'

const BottomMenu = ({ state, ln }) => {
    return (
        <List horizontal divided link size='small'>
            {state.links ? state.links.bottomMenu.map((el, key) =>
                <List.Item key={key} ><Link link={el} ln={ln} >{state[ln] ? state[ln][el.ref] : ''}</Link></List.Item>
            ) : ''}
        </List>
    )
}

export default BottomMenu