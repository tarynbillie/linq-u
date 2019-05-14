import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import './App.css';

function App () {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/home' exact component={Home} />
					<Route path='/about' exact component={About} />
					{/* <Route path='/contact' exact component={Contact} /> */}
					<Route path={'/'} render={() => <Redirect to='/home' />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
