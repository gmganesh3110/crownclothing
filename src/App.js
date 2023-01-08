import React from 'react';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';
import UserPage from './pages/userPage/userPage';

function App() {
  return (
    <div >
      <Header />
      <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/shop' element={<ShopPage />} />
      <Route exact path='/signin' element={<UserPage  />} />

      </Routes>
    </div>
  );
}

export default App;
