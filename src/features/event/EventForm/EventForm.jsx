import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import {
	composeValidators,
	combineValidators,
	isRequired,
	hasLengthGreaterThan
} from "revalidate";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import SelectInput from "../../../app/common/form/SelectInput";
import DateInput from "../../../app/common/form/DateInput";

const mapStateToProps = (state, ownProps) => {
	const eventId = ownProps.match.params.id;

	let event = {};

	if (eventId && state.events.length > 0) {
		event = state.events.filter(event => event.id === eventId)[0];
	}

	return {
		initialValues: event
	};
};

const mapDispatchToProps = {
	createEvent,
	updateEvent
};

const validate = combineValidators({
	title: isRequired({ message: "The event title is required" }),
	category: isRequired({ message: "The category iss required" }),
	description: composeValidators(
		isRequired({ message: "Please enter a description" }),
		hasLengthGreaterThan(4)({
			message: "Description needs to be at least 5 characters"
		})
	)(),
	city: isRequired("city"),
	venue: isRequired("venue"),
	date: isRequired("date")
});

const category = [
	{ key: "drinks", text: "Drinks", value: "drinks" },
	{ key: "culture", text: "Culture", value: "culture" },
	{ key: "film", text: "Film", value: "film" },
	{ key: "food", text: "Food", value: "food" },
	{ key: "music", text: "Music", value: "music" },
	{ key: "travel", text: "Travel", value: "travel" }
];

class EventForm extends Component {
	//refs can be used only in class components
	//But now useRef() hook is used in react hooks now
	onFormSubmit = values => {
		// console.log(values);
		if (this.props.initialValues.id) {
			this.props.updateEvent(values);
			this.props.history.push(`/events/${this.props.initialValues.id}`);
		} else {
			const newEvent = {
				...values,
				id: cuid(),
				hostPhotoURL: "/images/user.png",
				hostedBy: "Bob"
			};
			this.props.createEvent(newEvent);
			this.props.history.push(`/events/${newEvent.id}`);
		}
	};

	// with [evt.target.name], we can now approach object property string value

	// handleInputChange = evt => {
	// 	this.setState({
	// 		[evt.target.name]: evt.target.value
	// 	});
	// };

	render() {
		const { history, initialValues, invalid, submitting, pristine } = this.props;

		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color="blue" content="Event Details" />
						<Form
							onSubmit={this.props.handleSubmit(this.onFormSubmit)}
							autoComplete="off"
						>
							<Field
								name="title"
								component={TextInput}
								placeholder="What is the name of the event?"
							/>
							<Field
								name="category"
								component={SelectInput}
								options={category}
								placeholder="What is the event about?"
							/>
							<Field
								name="description"
								component={TextArea}
								rows={10}
								placeholder="Tell me more about the event!"
							/>
							<Header sub color="blue" content="Event Location Details" />
							<Field name="city" component={TextInput} placeholder="In which city?" />
							<Field
								name="venue"
								component={TextInput}
								placeholder="At which venue?"
							/>
							<Field
								name="date"
								component={DateInput}
								placeholder="When does it happen?"
								dateFormat="dd LLL yyyy h:mm a"
								showTimeSelect
								timeFormat="HH:mm"
							/>

							<Button
								disabled={invalid || submitting || pristine}
								positive
								type="submit"
							>
								Submit
							</Button>
							<Button
								onClick={
									initialValues.id
										? () => history.push(`/events/${initialValues.id}`)
										: () => history.push("/events")
								}
								type="button"
							>
								Cancel
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(reduxForm({ form: "eventForm", validate })(EventForm));
