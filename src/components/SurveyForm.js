import React, { Component } from 'react';
import states from '../data/states';
import TextField from '../common/TextField'
import PropTypes from 'prop-types';

import map from 'lodash/map';

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
	handleSubmit(e) {
		this.setState({errors: {}, isLoading: true})
		e.preventDefault();
		console.log('this.state', this.state);
		this.props.surveyRequest(this.state).then(
			() => {}, 
			({data}) => this.setState({errors: data, isLoading: false})
		);
	}
	render() {
		const options = map(states, (val, key) => {
			return <option key={val} value={val}>{key}</option>
		})

		return(
			<form onSubmit={this.handleSubmit}>
				<h2>Please Fill the Survey</h2>

				<TextField 
					fieldName='firstname' 
					label='First Name' 
					firstname={this.state.firstname} 
					handleChange={this.handleChange}
					errors={this.state.errors}
				/>

				<TextField 
					fieldName='lastname' 
					label='Last Name' 
					firstname={this.state.lastname} 
					handleChange={this.handleChange}
					errors={this.state.errors}
				/>

				<TextField 
					fieldName='email' 
					label='Email' 
					firstname={this.state.email} 
					handleChange={this.handleChange}
					errors={this.state.errors}
				/>

				<TextField 
					fieldName='annualincome' 
					label='Annual Income' 
					firstname={this.state.annualincome} 
					handleChange={this.handleChange}
					errors={this.state.errors}
				/>

				<div className="form-group">
					<label className="control-label">State</label>
					<select className='form-control' name='state' value={this.state.state} onChange={this.handleChange}>
						<option value="" disabled > Choose Your State</option>
						{options}
					</select>
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
