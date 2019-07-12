import React from "react";
import {
	Segment,
	Container,
	Header,
	Image,
	Button,
	Icon
} from "semantic-ui-react";

const HomePage = ({ history }) => {
	return (
		<Segment inverted textAlign="center" vertical className="masthead">
			<Container text>
				<Header as="h1" inverted>
					<Image
						size="massive"
						src="/images/logo.png"
						alt="logo"
						style={{ marginBottom: 12 }}
					/>
					Eventify
				</Header>
				<Button onClick={() => history.push("/events")} size="huge" inverted>
					Checkout Events
					<Icon name="right arrow" inverted />
				</Button>
			</Container>
		</Segment>
	);
};

export default HomePage;
