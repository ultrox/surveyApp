import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import routes from './routes'

const store = createStore(
	(state = {}) => state,
	compose(applyMiddleware(thunk))
);
ReactDOM.render(

	<Provider store={store}>
		<Router history={browserHistory} routes={routes} />
	</Provider>,
	document.getElementById('root')
);
