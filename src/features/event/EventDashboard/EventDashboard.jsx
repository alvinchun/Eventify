import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventListItem.jsx/EventList";
import EventForm from "../EventForm/EventForm";
import cuid from "cuid";

const eventsFromDashboard = [
	{
		id: "1",
		title: "Trip to Tower of London",
		date: "2018-03-27T11:00:00+00:00",
		category: "culture",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
		city: "London, UK",
		venue: "Tower of London, St Katharine's & Wapping, London",
		hostedBy: "Bob",
		hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
		attendees: [
			{
				id: "a",
				name: "Bob",
				photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
			},
			{
				id: "b",
				name: "Tom",
				photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
			}
		]
	},
	{
		id: "2",
		title: "Trip to Punch and Judy Pub",
		date: "2018-03-28T14:00:00+00:00",
		category: "drinks",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
		city: "London, UK",
		venue: "Punch & Judy, Henrietta Street, London, UK",
		hostedBy: "Tom",
		hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
		attendees: [
			{
				id: "b",
				name: "Tom",
				photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
			},
			{
				id: "a",
				name: "Bob",
				photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
			}
		]
	}
];

class EventDashboard extends Component {
	state = {
		events: eventsFromDashboard,
		isOpen: false
	};

	handleOpenToggle = () => {
		// this.setState({
		// 	isOpen: true
		// });

		this.setState(() => ({
			isOpen: true
		}));

		// this.setState(prevState => ({
		// 	isOpen: !prevState.isOpen
		// }));

		// if (this.state.isOpen === false) {
		// 	this.setState({
		// 		isOpen: true
		// 	});
		// } else if (this.state.isOpen === true) {
		// 	this.setState({
		// 		isOpen: false
		// 	});
		// }

		// this.setState(() => {
		// 	if (this.state.isOpen === false) {
		// 		return {
		// 			isOpen: true
		// 		};
		// 	} else if (this.state.isOpen === true) {
		// 		return {
		// 			isOpen: false
		// 		};
		// 	}
		// });
	};

	handleCloseToggle = () => {
		this.setState(() => ({
			isOpen: false
		}));
	};

	handleCreateEvent = newEvent => {
		newEvent.id = cuid();
		newEvent.hostPhotoURL = "/images/user.png";
		this.setState(({ events }) => ({
			events: [...events, newEvent],
			isOpen: false
		}));
	};

	render() {
		const { events, isOpen } = this.state;
		return (
			<Grid>
				<Grid.Column width={10}>
					<EventList events={events} />
				</Grid.Column>
				<Grid.Column width={6}>
					<Button onClick={this.handleOpenToggle} positive content="Create Event" />
					{isOpen && (
						<EventForm
							createEvent={this.handleCreateEvent}
							cancelFormOpen={this.handleCloseToggle}
						/>
					)}
				</Grid.Column>
			</Grid>
		);
	}
}

export default EventDashboard;
