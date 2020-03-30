import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom';

import States from './pages/states/';
import Countries from './pages/countries/';
import World from './pages/world/';

import Hero from './components/hero';
import Navbar from './components/navbar/';
import Footer from './components/footer';

function App() {
	return (
		<Router basename="covid19-near-me">
			<Switch>
				<Route path="/states">
					<Hero
						title="Individual U.S. State Data"
						color="dark"
						size="medium"
					/>
					<Navbar />
					<States />
				</Route>
				<Route path="/countries">
					<Hero
						title="Individual Country Data"
						color="dark"
						size="medium"
					/>
					<Navbar />
					<Countries />
				</Route>
				<Route path="/world">
					<Hero title="Worldwide Data" color="dark" size="medium" />
					<Navbar />
					<World />
				</Route>
				<Route path="/">
					<Redirect to="/states" />
				</Route>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
