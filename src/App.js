import React from 'react';
import './App.css';
import { Route ,Routes} from 'react-router-dom';
import Homepage from './pages/homepage/homepage';

const HatsPage=()=>(
  <div>
    <h1>hatsPage</h1>
  </div>
)

function App() {
  return (
    <div >
      {/* <Route path='/'  element={<Homepage />} ></Route> */}
      <Routes>
      <Route exact path='/' element={<Homepage />} />
      <Route exact path='/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
