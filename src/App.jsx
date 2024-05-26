import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Pages/Loginpage';
import Buyerpage from './Pages/Buyerpage';
import Sellerpage from './Pages/Sellerpage';
import './App.css';

function App() {
  const [userType, setUserType] = useState('');
  const [properties, setProperties] = useState([]);

  const handleUserRegistration = (userData) => {
    setUserType(userData.userType);
  };

  const handlePropertyPost = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  return (
    <Router>
      <div className="App">
        <h1 className='id'>Rentify</h1>
        <Routes>
          <Route path="/" element={<Loginpage onRegister={handleUserRegistration} />} />
          <Route path="/buyer" element={<Buyerpage properties={properties} />} />
          <Route path="/seller" element={<Sellerpage onPropertyPost={handlePropertyPost} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
