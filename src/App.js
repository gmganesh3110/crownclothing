import React from 'react';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';

function App() {
  return (
    <div >
      <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
