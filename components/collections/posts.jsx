import React, {useContext} from "react"

import Link from "next/link"

import {Divider, Grid, Header} from "semantic-ui-react"

import {Image} from "components/pureUi"
import {LangContext} from "context"

const Posts = ({docs}) => {
	const [ln] = useContext(LangContext)
	if (Array.isArray(docs))
		return docs?.map((el, key) => (
			<Grid container stackable verticalAlign="middle" key={key}>
				<Link href="/[lang]/post/[alias]" as={`/${ln}/post/${el.alias}`}>
					<a className="row postItem">
						<Grid.Column width={4}>
							<Image id={el.image} />
						</Grid.Column>
						<Grid.Column width={12}>
							<Header as="h3" style={{fontSize: "2em"}}>
								{el.title}
							</Header>
							<div
								style={{fontSize: "1.33em"}}
								dangerouslySetInnerHTML={{__html: el.preview}}
							/>
						</Grid.Column>
					</a>
				</Link>
				<Divider />
			</Grid>
		))

	return <></>
}

export default Posts
