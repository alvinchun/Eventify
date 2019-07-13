import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";

//rootReducer where combining all the reducers
const rootReducer = combineReducers({
	test: testReducer
});

export default rootReducer;
