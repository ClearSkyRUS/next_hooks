import { useContext } from 'react'

import { LangContext } from 'context'

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
  } from 'semantic-ui-react'


const MainPage = () => {
    const [ln, setLn] = useContext(LangContext)
    return (
        <>
            <Segment style={{ padding: '3em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        We Help Companies and Companions
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                        We can give your company superpowers to do things that they never thought possible.
                        Let us delight your customers and empower your needs... through pure data analytics.
                        </p>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        We Make Bananas That Can Dance
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                        Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                        bioengineered.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/assets/img/holder.png' />
                    </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        "What a Company"
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        "I shouldn't have gone with their competitor."
                        </Header>
                        <p style={{ fontSize: '1.33em' }}>
                        <Image avatar src='/assets/img/holder.png' />
                        <b>Nan</b> Chief Fun Officer Acme Toys
                        </p>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Container text>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image bordered rounded src='/assets/img/holder.png' />
                            </Grid.Column>
                            <Grid.Column width={12}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            Breaking The Grid, Grabs Your Attention
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the
                            art of doing nothing by providing massive amounts of whitespace and generic content that
                            can seem massive, monolithic and worth your attention.
                            </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/>
                        <Grid.Row>
                            <Grid.Column width={4}>
                                <Image bordered rounded src='/assets/img/holder.png' />
                            </Grid.Column>
                            <Grid.Column width={12}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                            Breaking The Grid, Grabs Your Attention
                            </Header>
                            <p style={{ fontSize: '1.33em' }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the
                            art of doing nothing by providing massive amounts of whitespace and generic content that
                            can seem massive, monolithic and worth your attention.
                            </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Divider/>
                    </Grid>
                </Container>
            </Segment>
        </>
    )
}

export default MainPage
