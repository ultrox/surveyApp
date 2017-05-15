import React, { Component } from 'react';
import states from '../data/states';
import TextField from './common/TextFieldGroup'
import PropTypes from 'prop-types';
import { validateInput } from '../utils';
import classnames from 'classnames';
import map from 'lodash/map';
import {browserHistory} from 'react-router';

class SurveyForm extends Component {
	constructor(props) {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			email:'',
			annualincome: '',
			state: '',
			errors: {},
			isLoading: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	isValid() {
		const { errors, isValid } = validateInput(this.state)
		if(!isValid) {
			this.setState({ errors });
		}
		return isValid;
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.isValid()){
			this.setState({errors: {}, isLoading: true})
			this.props.surveyRequest(this.state).then(
				() => browserHistory.push('/thanks'), 
				({data}) => this.setState({errors: data, isLoading: false})
			);
		}
	}
	render() {
		const {errors} = this.state;
		const options = map(states, (val, key) => {
			return <option key={val} value={val}>{key}</option>
		})

		return(
			<form onSubmit={this.handleSubmit}>
				<h2>Please Fill the Survey</h2>

				<TextField 
					fieldName='firstname' 
					label='First Name' 
					value={this.state.firstname} 
					handleChange={this.handleChange}
					error={errors.firstname}
				/>

				<TextField 
					fieldName='lastname' 
					label='Last Name' 
					value={this.state.lastname} 
					handleChange={this.handleChange}
					error={errors.lastname}
				/>

				<TextField 
					fieldName='email' 
					label='Email' 
					value={this.state.email} 
					handleChange={this.handleChange}
					error={errors.email}
				/>

				<TextField 
					fieldName='annualincome' 
					label='Annual Income' 
					value={this.state.annualincome} 
					handleChange={this.handleChange}
					error={errors.annualincome}
				/>

				<div className={classnames("form-group", {'has-error': errors.state})}>
					<label className="control-label">State</label>
					<select className='form-control' name='state' value={this.state.state} onChange={this.handleChange}>
						<option value="" disabled > Choose Your State</option>
						{options}
					</select>
					{errors.state && <span className="help-block">{errors.state}</span>}
				</div>

				<div className='form-group'>
					<button disabled={this.state.isLoading} className="btn btn-primary bnt-lg">
						Send
					</button>
				</div>
			</form>
		)
	}
}

SurveyForm.propTypes = {
	surveyRequest: PropTypes.func.isRequired
}

export default SurveyForm;
