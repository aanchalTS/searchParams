import React from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Home from './Home';
import NewPage from './NewPage';
import Filter from './Filter';
import Clickme from './Clickme';

function App() {
  return (
    <>
      <BrowserRouter>
      <Link to="/NewPage">About</Link>
      <br></br>
      <Link to='/'>Home</Link>
      <br></br>
      <Link to="/Filter">Filter</Link>
        <Routes>
          <Route path='/' element={<Home />} >
          <Route path='/Clickme' element={<Clickme />} />
          </Route>
          <Route path='/NewPage' element={<NewPage />} />
          <Route path='/Filter' element={<Filter />} />
        </Routes>
      </BrowserRouter>
  
     
    

    </>
  );
}

export default App;

