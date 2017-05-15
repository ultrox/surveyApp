import React from 'react';
import {Route, IndexRoute} from 'react-router';

import SurveyPage from './components/SurveyPage.js';
import About from './components/About.js';

import App from './components/App';
import Thanks from './components/Thanks';

export default (
	<Route path='/' component={App}>
		<IndexRoute component={SurveyPage} />
		<Route path="/about" component={About} />
		<Route path="/thanks" component={Thanks} />
	</Route>
)
