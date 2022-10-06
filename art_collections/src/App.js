import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GalleryContainer from './containers/GalleryContainer';
import CollectionContainer from './containers/CollectionContainer';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryContainer />}/>
				<Route path="/collections" element={<CollectionContainer />}/>
        <Route path='/signup' element={<SignUpForm />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
