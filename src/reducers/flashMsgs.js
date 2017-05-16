//reducer return state always
import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from '../actions/types'
import shortid from 'shortid';
import { remove } from 'lodash';

export default (state = [], action={}) => {
	switch (action.type) {
		case REMOVE_FLASH_MESSAGE: 
			const ns = [...state]
			remove(ns, obj => obj.id === action.msg )
			return ns

		case ADD_FLASH_MESSAGE: 
			return [
				...state,
				{
					type: action.msg.type,
					text: action.msg.text,
					id: shortid.generate()
				}
			]
		default: 
			return state
	}
}
