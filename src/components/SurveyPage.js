import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SurveyForm from './SurveyForm';
import { connect } from 'react-redux';
import { surveyRequest } from '../actions/surveyActions';

class SurveyPage extends Component {
	render() {
		const { surveyRequest } = this.props;
		return(
			<div className='row'>
				<div className="col-md-4 col-md-offset-4">
					<SurveyForm surveyRequest={surveyRequest}/>
				</div>
			</div>
		)
	}
}

SurveyPage.propTypes = {
	surveyRequest: PropTypes.func.isRequired
}

export default connect(null, {surveyRequest})(SurveyPage);
