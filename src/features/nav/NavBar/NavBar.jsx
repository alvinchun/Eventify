import React, { Component } from "react";
import { connect } from "react-redux";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";
import { logout } from "../../auth/authActions";

const mapStateToProps = state => ({
	auth: state.auth
});

const mapDisPatchToProps = {
	openModal,
	logout
};

class NavBar extends Component {
	// state = {
	// 	authenticated: false
	// };

	handleSignIn = () => {
		this.props.openModal("LoginModal");
	};

	handleRegister = () => {
		this.props.openModal("RegisterModal");
	};

	handleSignOut = () => {
		this.props.logout();
		this.props.history.push("/");
	};

	render() {
		// const { authenticated } = this.state;
		const { auth } = this.props;
		const authenticated = auth.authenticated;

		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item as={NavLink} exact to="/" header>
						<img src="images/logo.png" alt="logo" />
						Eventify
					</Menu.Item>
					<Menu.Item as={NavLink} exact to="/events" name="Events" />
					<Menu.Item as={NavLink} to="/people" name="People" />
					<Menu.Item as={NavLink} to="/test" name="Test" />
					<Menu.Item>
						<Button
							as={Link}
							to="/createEvent"
							floated="right"
							positive
							inverted
							content="Create Event"
						/>
					</Menu.Item>
					{authenticated ? (
						<SignedInMenu
							signOut={this.handleSignOut}
							currentUser={auth.currentUser}
						/>
					) : (
						<SignedOutMenu
							signIn={this.handleSignIn}
							register={this.handleRegister}
						/>
					)}
				</Container>
			</Menu>
		);
	}
}

// to use the history.push('/')
export default withRouter(
	connect(
		mapStateToProps,
		mapDisPatchToProps
	)(NavBar)
);
// export default NavBar;
