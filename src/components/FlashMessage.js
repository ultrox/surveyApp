import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class FlashMessage extends React.Component {
	constructor() {
		super()
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		console.log('nono')
		this.props.removeFlashMsgs(this.props.message.id);
	}
	render() {
		const {id, type, text} = this.props.message;
		return (
			<div className={classnames('alert', {
				'alert-success': type === 'success',
				'alert-danger': type === 'error'
			})}>
			<button onClick={this.handleClick} className="close"><span>&times;</span></button>
			{text}
		</div>
		)
	}
}

FlashMessage.propTypes = {
	message: PropTypes.object.isRequired,
	removeFlashMsgs: PropTypes.func.isRequired
}

export default FlashMessage;
