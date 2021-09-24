import { BrowserRouter as Router } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import Background from './components/Background';
import Footer from './components/Footer';
import Routes from './routes';
import './App.css';

function App() {
	return (
		<div>
			<LazyLoad>
				<Background/>
				<Router>
					<Routes/>
				</Router>
				<Footer />
			</LazyLoad>
		</div>
	);
}

export default App;
