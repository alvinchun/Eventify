import { CREATE_EVENT, UPDATE_EVENT, DELETE_EVENT, FETCH_EVENTS } from "./eventConstants";
import { createReducer } from "../../app/common/util/reducerUtils"

const initialState = [];

//Reducer

const createEvent = (state, payload) => {
	return [...state, payload.event];
};

// WHY (event => event.id !== payload.event.id) ????
const updateEvent = (state, payload) => {
	return [
		...state.filter(event => event.id !== payload.event.id),
		payload.event
	];
};

const deleteEvent = (state, payload) => {
	return [...state.filter(event => event.id !== payload.eventId)];
};

const fetchEvents = (state, payload) => {
	return payload.events
}

export default createReducer(initialState, {
	[CREATE_EVENT]: createEvent,
	[UPDATE_EVENT]: updateEvent,
	[DELETE_EVENT]: deleteEvent,
	[FETCH_EVENTS]: fetchEvents
});

// export default createReducer(initialState, {
// 	//Action type : function we are calling
// 	[INCREMENT_COUNTER]: incrementCounter,
// 	[DECREMENT_COUNTER]: decrementCounter
// });
