

import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Restaurant from './pages/Restaurant';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/:restaurantID" element={<Restaurant />}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
