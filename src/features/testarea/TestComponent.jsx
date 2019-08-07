import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
// import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";
// mapping our store states to our component props

// Kicking data in store into component props to let the component know the current state
const mapStateToProps = state => ({
	dataaa: state.test.data
});

// Kicking actions into component props to update or dispatch === updating to state
const mapDispatchToProps = {
	incrementCounter,
	decrementCounter,
	openModal
};

class TestComponent extends Component {
	state = {
		latlng: {
			lat: 59.95,
			lng: 30.33
		}
	};

	handleSelect = address => {
		geocodeByAddress(address)
			.then(results => getLatLng(results[0]))
			.then(latLng => this.setState({ latlng: latLng }))
			.catch(error => console.error("Error", error));
	};

	render() {
		const { dataaa, incrementCounter, decrementCounter, openModal } = this.props;
		return (
			<div>
				<h1>Test Components</h1>
				{/* we can reach to store state by props.stateName  */}
				<h3>The answer is: {dataaa}</h3>
				<button onClick={decrementCounter}>-</button>
				<button onClick={incrementCounter}>+</button>
				<button
					onClick={() => openModal("TestModal", { data: 42 })}
					color="teal"
					content="Open Modal"
				>
					+
				</button>

				<br />
				<br />
				<TestPlaceInput selectAddress={this.handleSelect} />
				<SimpleMap key={this.state.latlng.lng} latlng={this.state.latlng} />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TestComponent);
