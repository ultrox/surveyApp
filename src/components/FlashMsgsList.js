import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import { removeFlashMsgs } from '../actions/flashMsgs';

class FlashMsgsList extends Component {
	render() {
		const messages = this.props.messages.map(message => 
			<FlashMessage removeFlashMsgs={ this.props.removeFlashMsgs } key={message.id} message={message}/>
		)
		return(
			<div>
				{messages}
			</div>
		);
	}
}

FlashMsgsList.propTypes = {
	messages: PropTypes.array.isRequired,
	removeFlashMsgs: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	return {
		messages: state.flashMsgs
	}
}

export default connect(mapStateToProps, {removeFlashMsgs} )(FlashMsgsList);

