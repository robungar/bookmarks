var Entry = require('../models/Entry')

module.exports = {

	get: function(params, callback){
		Entry.find(params, function(err, entries){
			if (err){
				if(callback != null)
				callback(err, null)
				return
			}
			if(callback != null){
			// 	if(isRaw == true){
			// 		callback(null, entries)
			// return
			// 	}
				callback(null, entries)
				return
			}
		})
	},

	getById: function(id, callback){
		Entry.findById(id, function(err, entry){
			if (err){
				var msg = 'Entry '+id+' not found.'
				callback({message:msg}, null)
				return
			}

			callback(null, entry)
			return
		})
	},

	post: function(params, callback){

		var entryParams = {}
		entryParams['phone'] = params['From']

		var body = params['Body']

		var parts = body.split(' ')
		var url = ''
		for (var i = 0; i <parts.length; i++){
			var word = parts[i]
			if(word.indexOf('http') != -1){
				url = word
				break
			}
		}

		entryParams['url'] = url

		Entry.create(entryParams, function(err, entry){
			if (err){
				callback(err, null)
				return
			}

			callback(null, entry)
			return
		})
	}
}