import React, {useContext} from "react"
import {useRouter} from "next/router"
import {useRouterControl} from "hooks"

import {ItemsContext, LangContext} from "context"
import {Image} from "components/pureUi"

import {Button, Container, Grid, Header, Segment} from "semantic-ui-react"

import {Posts} from "components/collections"

const MainPage = () => {
	const [state] = useContext(ItemsContext)
	const [ln] = useContext(LangContext)
	const {setRouteFromLink} = useRouterControl()
	const router = useRouter()
	const pageData = state[router?.asPath] ? state[router?.asPath] : null
	const Setences = ({setence}) => (
		<>
			<Header as="h3" style={{fontSize: "2em"}}>
				{setence?.title?.[ln]?.text}
			</Header>
			<p style={{fontSize: "1.33em"}}>{setence?.text?.[ln]?.text}</p>
		</>
	)
	return (
		<>
			<Segment style={{padding: "3em 0em"}} vertical>
				<Grid container stackable verticalAlign="middle">
					<Grid.Row>
						<Grid.Column width={8}>
							{pageData?.extra?.map((setence, key) => (
								<Setences setence={setence} key={key} />
							))}
						</Grid.Column>
						<Grid.Column floated="right" width={6}>
							<Image id={pageData?.extraImage} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row>
						<Grid.Column textAlign="center">
							<Button
								onClick={() =>
									setRouteFromLink({href: "/posts/[page]", as: "/posts/1"})
								}
								content={state[ln]?.checkThemOut}
								size="huge"
							/>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<Segment style={{padding: "2em 0em"}} vertical>
				<Container text>
					<Posts docs={pageData.posts} />
				</Container>
				<Container textAlign="center" style={{paddingTop: "2em"}}>
					<Button
						onClick={() =>
							setRouteFromLink({href: "/posts/[page]", as: "/posts/1"})
						}
						content={state[ln]?.morePosts}
						size="huge"
					/>
				</Container>
			</Segment>
		</>
	)
}

export default MainPage
