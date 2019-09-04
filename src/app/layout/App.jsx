import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import EventDashboard from "../../features/event/EventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";
import HomePage from "../../features/home/HomePage";
import EventDetailedPage from "../../features/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/UserDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import EventForm from "../../features/event/EventForm/EventForm";
import TestComponent from "../../features/testarea/TestComponent";
import ModalManager from "../../features/modals/ModalManager";

function App() {
  return (
    <Fragment>
      <ModalManager />
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={({ location }) => (
          <>
            <NavBar />
            <Container className="main">
              <Switch key={location.key}>
                {/* history props (object) is reachable inside of the Route component */}
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route
                  path={["/createEvent", "/manage/:id"]}
                  component={EventForm}
                />
                <Route path="/test" component={TestComponent} />
              </Switch>
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

//withRouter = we now have the access to routing props
export default withRouter(App);
