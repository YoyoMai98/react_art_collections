import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GalleryContainer from './containers/GalleryContainer';
import CollectionContainer from './containers/CollectionContainer';
import SignUpForm from './components/SignUpForm';
import Account from './components/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryContainer />}/>
				<Route path="/collections" element={<CollectionContainer />}/>
        <Route path='/signup' element={<SignUpForm />} />
        <Route path='/account' element={<Account />} />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
