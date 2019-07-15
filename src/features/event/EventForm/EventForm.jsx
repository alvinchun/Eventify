import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Segment, Form, Button } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

const mapStateToProps = (state, ownProps) => {
	const eventId = ownProps.match.params.id;

	let event = {
		title: "",
		date: "",
		city: "",
		venue: "",
		hostedBy: ""
	};

	if (eventId && state.events.length > 0) {
		event = state.events.filter(event => event.id === eventId)[0];
	}

	return {
		event
	};
};

const mapDispatchToProps = {
	createEvent,
	updateEvent
};

class EventForm extends Component {
	//Passing event from above (redux store) to state
	state = {
		...this.props.event
	};

	componentDidMount = () => {
		if (this.props.selectedEvent !== null) {
			this.setState({
				...this.props.selectedEvent
			});
		}
	};
	//refs can be used only in class components
	//But now useRef() hook is used in react hooks now
	handleFormSubmit = evt => {
		evt.preventDefault();
		// console.log(this.refs.title.value);
		if (this.state.id) {
			this.props.updateEvent(this.state);
			this.props.history.push(`/events/${this.state.id}`);
		} else {
			const newEvent = {
				...this.state,
				id: cuid(),
				hostPhotoURL: "/images/user.png"
			};

			newEvent.id = cuid();
			newEvent.hostPhotoURL = "/images/user.png";
			this.props.createEvent(newEvent);
			this.props.history.push("/events");
		}
	};

	// with [evt.target.name], we can now approach object property string value

	// handleInputChange = evt => {
	// 	this.setState({
	// 		[evt.target.name]: evt.target.value
	// 	});
	// };

	handleInputChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		});
	};

	render() {
		const { title, date, city, venue, hostedBy } = this.state;

		return (
			<Segment>
				<Form onSubmit={this.handleFormSubmit} autoComplete="off">
					<Form.Field>
						<label>Event Title</label>
						{/* refs.title can be used for uncontrolled form */}
						{/* <input ref="title" placeholder="Event Title" /> */}
						<input
							name="title"
							onChange={this.handleInputChange}
							value={title}
							placeholder="Event Title"
						/>
					</Form.Field>
					<Form.Field>
						<label>Event Date</label>
						<input
							type="date"
							name="date"
							onChange={this.handleInputChange}
							value={date}
							placeholder="Event Date"
						/>
					</Form.Field>
					<Form.Field>
						<label>City</label>
						<input
							name="city"
							onChange={this.handleInputChange}
							value={city}
							placeholder="City event is taking place"
						/>
					</Form.Field>
					<Form.Field>
						<label>Venue</label>
						<input
							name="venue"
							onChange={this.handleInputChange}
							value={venue}
							placeholder="Enter the Venue of the event"
						/>
					</Form.Field>
					<Form.Field>
						<label>Hosted By</label>
						<input
							name="hostedBy"
							onChange={this.handleInputChange}
							value={hostedBy}
							placeholder="Enter the name of person hosting"
						/>
					</Form.Field>
					<Button positive type="submit">
						Submit
					</Button>
					<Button onClick={this.props.history.goBack} type="button">
						Cancel
					</Button>
				</Form>
			</Segment>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(reduxForm({ form: "eventForm" }))(EventForm);
