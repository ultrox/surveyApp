//we will dispatch this so it will triger our reducer funciton
import { ADD_FLASH_MESSAGE, REMOVE_FLASH_MESSAGE} from './types'

export function addFlashMsgs(msg) {
	return {
		type: ADD_FLASH_MESSAGE,
		msg: msg
	}
}

export function removeFlashMsgs(msg) {
	return {
		type: REMOVE_FLASH_MESSAGE,
		msg: msg
	}
}
