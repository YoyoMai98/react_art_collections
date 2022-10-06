import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GalleryContainer from './containers/GalleryContainer';
import CollectionContainer from './containers/CollectionContainer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GalleryContainer />
      </div>

      <Routes>
      <Route path="/" element={<GalleryContainer />}/>
				<Route path="/collections" element={<CollectionContainer />}/>
			</Routes>
    </BrowserRouter>
  );
}

export default App;
