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
			{/* <Scrollbars autoHide autoHideTimeout={2000} className="page" style={{ height: '100vh', width: '100vw' }}>
			</Scrollbars> */}
		</div>
	);
}

export default App;
