import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import GalleryContainer from './containers/GalleryContainer';
import CollectionContainer from './containers/CollectionContainer';
import SignUpForm from './components/SignUpForm';
import Account from './components/Account';
import { useState } from 'react';

function App() {

  const [account, setAccount] = useState()

  const registeredAccount = account => {
    alert(`
      Congrats ${account.lastName}, you have successfully registered!
    `)
    setAccount(account)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GalleryContainer />}/>
				<Route path="/collections" element={<CollectionContainer />}/>
        <Route path='/signup' element={
        <SignUpForm registeredAccount={registeredAccount}/>
        } />
        <Route path='/account' element={<Account account={account}/>}/>
			</Routes>
    </BrowserRouter>
  );
}

export default App;
