import React, { Component } from 'react';
import states from '../data/states';
import TextField from './common/TextFieldGroup'
import PropTypes from 'prop-types';
import { validateInput } from '../utils';
import classnames from 'classnames';
import map from 'lodash/map';
import {browserHistory} from 'react-router';
import acc from 'accounting';
import './custom.css'

class SurveyForm extends Component {
	constructor(props) {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			email:'',
			annualincome: '',
			annual: '',
			state: '',
			errors: {},
			isLoading: false
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		let name = e.target.name;
		let value = e.target.value;
		const annualincome = acc.unformat( this.state.annual );

		this.setState({
			[name]: value, annualincome
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
				() => {
					browserHistory.push('/thanks')
					this.props.addFlashMsgs({
						type: 'success',
						text: 'Successufully Submited'
					});
				}, 
				({data}) => this.setState({errors: data, isLoading: false})
			);
		} else {
			console.log('test fail', this.state)
		}
	}
	render() {
		const {errors} = this.state;
		const options = map(states, (val, key) => {
			return <option key={key} value={key}>{val}</option>
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
					fieldName='annual' 
					label='Annual Income' 
					value={this.state.annual} 
					handleChange={this.handleChange}
					type='text'
					placeholder="ex: 120,000.00"
					error={errors.annual}
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
	surveyRequest: PropTypes.func.isRequired,
	addFlashMsgs: PropTypes.func.isRequired
}

export default SurveyForm;
