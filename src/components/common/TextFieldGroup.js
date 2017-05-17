import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextFieldGroup = ({error, value, handleChange, label, fieldName, type, placeholder}) => {
	const ann = 'annual';
	return (		
		<div className={classnames("form-group input-icon", {'has-error': error})}>
			<label className="control-label">{label}</label>
			<input 
				type={type}
				name={fieldName}
				value={value}
				onChange={handleChange} 
				className={fieldName === 'annual' ? "form-control sis" : "form-control"} 
				placeholder={placeholder}
			/>
			{fieldName ==='annual' ? <div className='dolar'> <i>$</i></div> : ''}
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
	placeholder: PropTypes.string,
	label: PropTypes.string.isRequired
	
}

TextFieldGroup.defaultProps = {
	type: 'text'
}

export default TextFieldGroup;
