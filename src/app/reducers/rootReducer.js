import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducer from "../../features/event/eventReducer";

//rootReducer where combining all the reducers
const rootReducer = combineReducers({
	test: testReducer,
	eventss: eventReducer
});

export default rootReducer;
