import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInput(data) {
	let errors = {}
	if(Validator.isEmpty(data.email)) {
		errors.email = "Email field is required"
	}
	if(!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid"
	}
	if(Validator.isEmpty(data.firstname)) {
		errors.firstname = "First Name is required"
	}
	if(Validator.isEmpty(data.lastname)) {
		errors.lastname = "Last Name is required"
	}

	if(Validator.isEmpty(data.annual)) {
		errors.annual = "Annual Income is required"
	}
	if(Validator.isEmpty(data.state)) {
		errors.state = "State is required"
	}

	return {
		errors,
		isValid: isEmpty(errors)
	}
}
