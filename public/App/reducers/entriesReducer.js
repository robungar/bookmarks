import constants from '../constants/constants'

var initialState = {
	entries: {},
	entriesArray: []
}

export default function(state = initialState, action){
	switch(action.type) {
		case constants.ENTRIES_RECEIVED:
			var newState = Object.assign({}, state)
			//console.log('ENTRIES_RECEIVED: '+JSON.stringify(newState))
			newState['entriesArray'] = action.entries

			return newState

		default:
			return state
	}
}