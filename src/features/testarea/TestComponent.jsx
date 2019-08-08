import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementAsync, decrementAsync } from "./testActions";
import TestPlaceInput from "./TestPlaceInput";
import SimpleMap from "./SimpleMap";
// import PlacesAutocomplete from "react-places-autocomplete";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { openModal } from "../modals/modalActions";
import { Button } from "semantic-ui-react";
// mapping our store states to our component props

// Kicking data in store into component props to let the component know the current state
// There could be no initialstate(= null) such as for modals, we can just move onto mapDispatchToProps and passdown the actions.
const mapStateToProps = state => ({
	dataaa: state.test.data,
	loading: state.async.loading,
	buttonName: state.async.elementName
});

// const mapStateToProps = state => {
// 	return {
// 		dataaa: state.test.data,
// 		loading: state.async.loading
// 	};
// };

// Kicking actions into component props to update or dispatch === updating to state

const mapDispatchToProps = {
	incrementAsync,
	decrementAsync,
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
		const {
			dataaa,
			incrementAsync,
			decrementAsync,
			loading,
			openModal,
			buttonName
		} = this.props;
		return (
			<div>
				<h1>Test Components</h1>
				{/* we can reach to store state by props.stateName  */}
				<h3>The answer is: {dataaa}</h3>
				<Button
					name="decrement"
					loading={buttonName === "decrement" && loading}
					negative
					onClick={e => decrementAsync(e.target.name)}
				>
					Decrement
				</Button>
				<Button
					name="increment"
					loading={buttonName === "increment" && loading}
					positive
					onClick={e => incrementAsync(e.target.name)}
				>
					Increment
				</Button>
				<Button
					onClick={() => openModal("TestModal", { data: 42 })}
					color="teal"
					content="Open Modal"
				>
					Test Modal Button
				</Button>
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
