import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({error, value, handleChange, label, fieldName, type}) => {
	return (		
		<div className={classnames("form-group", {'has-error': error})}>
			<label className="control-label">{label}</label>
			<input 
				type={type}
				name={fieldName}
				value={value}
				onChange={handleChange} 
				className='form-control' 
			/>
			{error && <span className="help-block">{error}</span>}
		</div>
	)
}

TextFieldGroup.propTypes = {
	error: PropTypes.string,
	fieldName: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	type: PropTypes.string,
	label: PropTypes.string.isRequired
	
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;
