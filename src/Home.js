import React from 'react'
import {Link, Outlet} from 'react-router-dom'


function Home() {
  return (
    <div>
    <h1> Home page</h1>

    <Link to='/Clickme'> click</Link> 
    <Outlet />
    
     </div>
  );
}

export default Home;
