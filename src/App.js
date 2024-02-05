import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import NewPage from './NewPage';
import Filter from './Filter';
import Clickme from './Clickme';
import './App.css'; 
import GetData from './GetData';
import Elements from './Elements';
import LoginLogout from './LoginLogout';

function App() {
  return (
    <Router>
      <div className="navbar">
      <Link to='/'>Home</Link>
        <Link to="/NewPage">About</Link>
        
        <Link to="/Filter">Filter</Link>
        <Link to="/GetData">Input</Link>
        <Link to="/Elements">Elements</Link>
        <Link to="/LoginLogout">Login</Link>
      </div>
      <Routes>
      <Route path='/' element={<Home />} >
          <Route path='/Clickme' element={<Clickme />} />
          </Route>
        
        <Route path='/NewPage' element={<NewPage />}></Route>
        <Route path='/Filter' element={<Filter />} />
        <Route path='/GetData' element={<GetData />}></Route>
        <Route path='/Elements' element={<Elements />}></Route>
        <Route path='/LoginLogout' element={<LoginLogout />}></Route>
        
      </Routes>
    </Router>
  );
}

export default App;
