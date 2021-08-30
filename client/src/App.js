import { BrowserRouter as Router } from 'react-router-dom';
import Scrollbars from './components/Scrollbars';

import Background from './components/Background';
import Routes from './routes';
import './App.css';


function App() {
	return (
		<div>
			<Scrollbars autoHide autoHideTimeout={2000} style={{ height: '100vh', width: '100vw' }}>
				<Background/>
				<Router>
					<Routes/>
				</Router>
			</Scrollbars>
		</div>
	);
}

export default App;
