import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

//rootReducer where combining all the reducers
const rootReducer = combineReducers({
	test: testReducer,
	events: eventReducer
});

export default rootReducer;
