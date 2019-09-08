import React from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import { Route, Redirect, Switch } from "react-router-dom";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./Photos/PhotosPage";
import AccountPage from "./AccountPage";
import { updatePassword } from "../../auth/authActions";
import { updateProfile } from "../../user/userActions";

const actions = {
  updatePassword,
  updateProfile
};

const mapState = state => ({
  providerId: state.firebase.auth.providerData[0].providerId,
  user: state.firebase.profile
});

const SettingsDashboard = ({
  updatePassword,
  providerId,
  user,
  updateProfile
}) => {
  return (
    <Grid>
      <Grid.Column width={12}>
        <Switch>
          {/* Automatically redirect to /settings/basic page at /settings page */}
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route
            path="/settings/basic"
            render={() => (
              <BasicPage initialValues={user} updateProfile={updateProfile} />
            )}
          />
          <Route
            path="/settings/about"
            render={() => (
              <AboutPage initialValues={user} updateProfile={updateProfile} />
            )}
          />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                providerId={providerId}
                updatePassword={updatePassword}
              />
            )}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

//mapStateToProps to null && dispatchToProps
export default connect(
  mapState,
  actions
)(SettingsDashboard);
