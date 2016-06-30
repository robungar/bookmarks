import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
import { Provider } from 'react-redux'
import store from './stores/store'

class App extends Component {
	render(){
		return (
			<Main />
		)
	}
}

ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>, 
	document.getElementById('app'))