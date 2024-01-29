import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import NewPage from './NewPage';
import Filter from './Filter';
import Clickme from './Clickme';
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="navbar">
      <Link to='/'>Home</Link>
        <Link to="/NewPage">About</Link>
        
        <Link to="/Filter">Filter</Link>
      </div>
      <Routes>
      <Route path='/' element={<Home />} >
          <Route path='/Clickme' element={<Clickme />} />
          </Route>
        
        <Route path='/NewPage' element={<NewPage />}></Route>
        <Route path='/Filter' element={<Filter />} />
      </Routes>
    </Router>
  );
}

export default App;
