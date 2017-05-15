// to use thunk middleware instead of object we return function in which we can make anything we need 
import axios from 'axios';

export function surveyRequest(userData) {
	return dispatch => {
		return axios.post('/api/survey', userData);
	}
}
