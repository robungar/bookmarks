import React, { Component } from 'react'
import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './stores/store'

class ServerApp extends Component {
	render(){
		return (
			<Provider store={store}>
				<Main />
			</Provider>
		)
	}
}

export default ServerApp