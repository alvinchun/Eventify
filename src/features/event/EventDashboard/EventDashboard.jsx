import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import EventList from "../EventListItem.jsx/EventList";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import EventActivity from "../EventActivity/EventActivity";
import { firestoreConnect } from "react-redux-firebase";

const mapStateToProps = state => ({
  events: state.firestore.ordered.events,
  loading: state.async.loading
});

const mapDispatchToProps = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {
  // handleIsOpenToggle = () => {
  // 	this.setState(({ isOpen }) => ({
  // 		isOpen: !isOpen
  // 	}));

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
  // };

  // handleCreateEvent = newEvent => {
  // 	newEvent.id = cuid();
  // 	newEvent.hostPhotoURL = "/images/user.png";
  // 	this.props.createEvent(newEvent);
  // };

  // handleUpdateEvent = updatedEvent => {
  // 	this.props.updateEvent(updatedEvent);
  // };

  // handleUpdateEvent = updatedEvent => {
  // 	this.props.updateEvent(updatedEvent);
  // 	this.setState(({ events }) => ({
  // 		events: events.map(event => {
  // 			if (event.id === updatedEvent.id) {
  // 				return { ...updatedEvent };
  // 			} else {
  // 				return event;
  // 			}
  // 		}),
  // 		isOpen: false,
  // 		selectedEvent: null
  // 	}));
  // };

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  };

  // handleDeleteEvent = id => {
  // 	this.setState(({ events }) => ({
  // 		events: events.filter(e => e.id !== id)
  // 	}));
  // };

  render() {
    const { events, loading } = this.props;
    if (loading) return <LoadingComponent inverted={false} />;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventActivity />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(firestoreConnect([{ collection: "events" }])(EventDashboard));
