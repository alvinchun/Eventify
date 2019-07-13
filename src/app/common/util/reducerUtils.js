//Creating Reducer Utility Function

export const createReducer = (initialState, fnMap) => {
	return (state = initialState, { type, payload }) => {
		const handler = fnMap[type];

		return handler ? handler(state, payload) : state;
	};
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
