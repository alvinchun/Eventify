import React from "react";
import { Container } from "semantic-ui-react";
import { Route, Router } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/testarea/TestComponent";

function App() {
	return (
		<>
			<Route exact path="/" component={HomePage} />
			<Route
				path="/(.+)"
				render={() => (
					<>
						<NavBar />
						<Container className="main">
							{/* history props (object) is reachable inside of the Route component */}
							<Route path="/events" component={EventDashboard} />
							<Route path="/events/:id" component={EventDetailedPage} />
							<Route path="/people" component={PeopleDashboard} />
							<Route path="/profile/:id" component={UserDetailedPage} />
							<Route path="/settings" component={SettingsDashboard} />
							<Route path="/createEvent" component={EventForm} />
							<Route path="/test" component={TestComponent} />
						</Container>
					</>
				)}
			/>
		</>
	);
}

export default App;
