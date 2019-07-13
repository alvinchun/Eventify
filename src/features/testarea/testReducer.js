import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtils";

//Reducer
const initialState = {
	data: 42
};

const incrementCounter = state => {
	return { ...state, data: state.data + 1 };
};

const decrementCounter = state => {
	return { ...state, data: state.data - 1 };
};

// const testReducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case INCREMENT_COUNTER:
// 			return { ...state, data: state.data + 1 };
// 		case DECREMENT_COUNTER:
// 			return { ...state, data: state.data - 1 };
// 		default:
// 			return state;
// 	}
// };

export default createReducer(initialState, {
	//Action type : function we are calling
	[INCREMENT_COUNTER]: incrementCounter,
	[DECREMENT_COUNTER]: decrementCounter
});
