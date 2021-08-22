import { BrowserRouter as Router } from 'react-router-dom';

import Background from './components/Background';
import Routes from './routes';
import './App.css';

function App() {
	return (
		<div>
			<Background/>
			<Router>
				<Routes/>
			</Router>
		</div>
	);
}

export default App;
