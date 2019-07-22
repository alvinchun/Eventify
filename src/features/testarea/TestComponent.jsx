import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import TestPlaceInput from "./TestPlaceInput";
// mapping our store states to our component props

// Kicking data in store into component props to let the component know the current state
const mapStateToProps = state => ({
	dataaa: state.test.data
});

// Kicking actions into component props to update or dispatch === updating to state
const mapDispatchToProps = {
	incrementCounter,
	decrementCounter
};

class TestComponent extends Component {
	render() {
		const { dataaa, incrementCounter, decrementCounter } = this.props;
		return (
			<div>
				<h1>Test Components with Redux</h1>
				{/* we can reach to store state by props.stateName  */}
				<h3>The answer is: {dataaa}</h3>
				<button onClick={decrementCounter}>-</button>
				<button onClick={incrementCounter}>+</button>
				<br />
				<br />
				<TestPlaceInput />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TestComponent);
