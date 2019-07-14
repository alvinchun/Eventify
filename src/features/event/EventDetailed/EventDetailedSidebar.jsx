import React from "react";
import { Segment, Item, Label } from "semantic-ui-react";

const EventDetailedSidebar = ({ attendees }) => {
	const isHost = false;

	return (
		<>
			<Segment
				textAlign="center"
				style={{ border: "none" }}
				attached="top"
				secondary
				inverted
				color="teal"
			>
				{attendees && attendees.length}
				{attendees && attendees.length === 1 ? " person" : " people"}
				{attendees && attendees.length === 1 ? " is" : " are"} going
			</Segment>
			{attendees &&
				attendees.map(attendee => (
					<Segment key={attendee.id} attached>
						<Item.Group divided>
							<Item key={attendee.id} style={{ position: "relative" }}>
								{isHost && (
									<Label style={{ position: "absolute" }} color="orange" ribbon="right">
										Host
									</Label>
								)}
								<Item.Image size="tiny" src={attendee.photoURL} />
								<Item.Content verticalAlign="middle">
									<Item.Header as="h3">{attendee.name}</Item.Header>
								</Item.Content>
							</Item>
						</Item.Group>
					</Segment>
				))}
		</>
	);
};

export default EventDetailedSidebar;
