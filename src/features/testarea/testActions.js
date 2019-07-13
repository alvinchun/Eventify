import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";

//Creating Action Creator
export const incrementCounter = () => {
	return {
		type: INCREMENT_COUNTER
	};
};

export const decrementCounter = () => {
	return {
		type: DECREMENT_COUNTER
	};
};
