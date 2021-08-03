import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './container/About';
import Home from './container/Home';
import Repo from './container/Repo';

import Layout from './layout/Layout';

function App() {
	return (
		<Router>
			<Switch>
				<Layout>
					<Route path='/repo' component={Repo} exact />
					<Route path='/about' component={About} exact />
					<Route path='/' component={Home} exact />
				</Layout>
			</Switch>
		</Router>
	);
}

export default App;
