"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	entries: {},
	entriesArray: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.ENTRIES_RECEIVED:
			var newState = Object.assign({}, state);
			//console.log('ENTRIES_RECEIVED: '+JSON.stringify(newState))
			newState.entriesArray = action.entries;

			return newState;

		default:
			return state;
	}
};