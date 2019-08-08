import React from "react";
import { Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { closeModal } from "./modalActions";

const mapDispatchToProps = {
	closeModal
};

class TestModal extends React.Component {
	render() {
		return (
			<Modal closeIcon="close" open={true} onClose={this.props.closeModal}>
				<Modal.Header>Test Modal</Modal.Header>
				<Modal.Content>
					<Modal.Description>
						<p>Test Modal... nothing to see here</p>
					</Modal.Description>
				</Modal.Content>
			</Modal>
		);
	}
}

//Since there is no masStateToProps on this component, we just give null below.

export default connect(
	null,
	mapDispatchToProps
)(TestModal);
