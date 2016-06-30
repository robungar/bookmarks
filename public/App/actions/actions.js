import constants from '../constants/constants'

export default {
	entriesReceived: function(entries){
		return {
			type: constants.ENTRIES_RECEIVED,
			entries: entries
		}
	}
}