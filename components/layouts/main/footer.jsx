
import {
    Container,
    Divider,
    Grid,
    Header,
    List,
    Segment,
} from 'semantic-ui-react'

import { Logo } from 'components/pureUi'
import { FooterMenu, BottomMenu } from 'components/menu'

const Footer = ({ state, ln }) => (
    <Segment id='footer' vertical>
        <Container textAlign='center'>
            <Grid columns={4} divided stackable inverted>
                <Grid.Row>
                    <Grid.Column>
                        <FooterMenu state={state} ln={ln} />
                    </Grid.Column>
                    <Grid.Column className='aliginRight'>
                        <Header as='h4' content={state[ln] ? state[ln].footerText.header : ''} />
                        <p>{state[ln] ? state[ln].footerText.text : ''}</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            <Divider section />
            <Logo centered />
            <BottomMenu state={state} ln={ln} />
        </Container>
    </Segment>
)

export default Footer