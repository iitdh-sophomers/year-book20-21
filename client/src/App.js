import { BrowserRouter as Router } from 'react-router-dom';
import Background from './components/Background';
import Routes from './routes';
import Cards from './components/Cards'
import './App.css';


function App() {
	return (
		<div>
			  <Background/>
			<Router>
				<Routes/>
			</Router>  
	{/*<Cards/>*/} 
		</div>
	);
}

export default App;
