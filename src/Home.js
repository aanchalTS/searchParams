import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import './Home.css'; // Import your CSS file for styling

function Home() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <h1>Home page</h1>

      <Link to='/Clickme'>Click</Link>
      <Outlet /><br />
      <button onClick={() => navigate('/Filter')}>Go to filter page</button><br />
      <button onClick={() => navigate('/NewPage')}>Go to About page</button>

    </div>
  );
}

export default Home;

