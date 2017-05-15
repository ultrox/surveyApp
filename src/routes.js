import React from 'react';
import {Route, IndexRoute} from 'react-router';

import SurveyForm from './components/SurveyForm.js';
import About from './components/About.js';

import App from './components/App';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={SurveyForm} />
		<Route path="/about" component={About} />
	</Route>
)
