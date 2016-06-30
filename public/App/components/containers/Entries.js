import React, { Component } from 'react'
import EntryPreview from '../../components/EntryPreview'
import APIManager from '../../utils/APIManager'
import store from '../../stores/store'
import actions from '../../actions/actions'
import { connect } from 'react-redux'

class Entries extends Component {

	constructor(props, context){
		super(props, context)
		this.state = {
			entries: [
			]
		}
	}

	componentDidMount(){
		//console.log('Component Did Mount')
		var _this = this
		APIManager.handleGet('/api/entry', null, function(err, response){
			if(err){
				alert(err)
				return
			}
			console.log('Entries: '+JSON.stringify(response.results))
			var results = response.results
			store.dispatch(actions.entriesReceived(results))
			// _this.setState({
			// 	entries: results
			// })
		})
	}



	render(){
		var entryList = this.props.entries.map(function(entry, i){
			return <EntryPreview key={entry._id} entry={entry} />
		})

		return(
			<div>
					{entryList}
			</div>
		)
	}
}

const stateToProps = function(state){
	return{
		entries: state.entriesReducer.entriesArray
	}
}

export default connect(stateToProps)(Entries)