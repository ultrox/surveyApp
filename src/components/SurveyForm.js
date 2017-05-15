import React, { Component } from 'react';
import states from '../data/states';
import TextField from '../common/TextField'


import map from 'lodash/map';

class SurveyForm extends Component {
	constructor(props) {
		super();
		this.state = {
			firstname: '',
			lastname: '',
			email:'',
			annualincome: '',
			state: ''
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
		e.preventDefault();
		console.log(this.state);
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
				/>

				<TextField 
					fieldName='lastname' 
					label='Last Name' 
					firstname={this.state.lastname} 
					handleChange={this.handleChange}
				/>

				<TextField 
					fieldName='email' 
					label='Email' 
					firstname={this.state.email} 
					handleChange={this.handleChange}
				/>

				<TextField 
					fieldName='annualincome' 
					label='Annual Income' 
					firstname={this.state.annualincome} 
					handleChange={this.handleChange}
				/>

				<div className="form-group">
					<label className="control-label">State</label>
					<select className='form-control' name='state' value={this.state.state} onChange={this.handleChange}>
						<option value="" disabled > Choose Your State</option>
						{options}
					</select>
				</div>
				<div className='form-group'>
					<button className="btn btn-primary bnt-lg">
						Send
					</button>
				</div>
			</form>
		)
	}
}

export default SurveyForm;
