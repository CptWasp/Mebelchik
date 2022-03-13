import './App.scss';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
import { ToOrder } from './pages/ToOrder';
import { Contacts } from './pages/Contacts';
import Home from './pages/Home';
import FullGallery from './pages/FullGallery';
import Footer from './components/Footer';

function App() {

	return (
		<div className='back'>
			<Router>
				<div className="container">


					<Header />
					<Routes>
						<Route path='/order' element={<ToOrder />} />
						<Route path='/' element={<Home />} />
						<Route path='/contacts' element={<Contacts />} />
						<Route path='/gallery' element={<FullGallery />} />
					</Routes>


				</div>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
