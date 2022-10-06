import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GalleryContainer from './containers/GalleryContainer';
import CollectionContainer from './containers/CollectionContainer';
import SignUpForm from './components/SignUpForm';

function App() {

  const registeredAccount = account => {
    alert(`
      Congrats ${account.lastName}, you have successfully registered!
    `)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryContainer />}/>
				<Route path="/collections" element={<CollectionContainer />}/>
        <Route path='/signup' element={
        <SignUpForm registeredAccount={registeredAccount}/>
        } />
			</Routes>
    </BrowserRouter>
  );
}

export default App;
