import React from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../components/Login';

const Loginpage = ({ onRegister }) => {
  const navigate = useNavigate();

  const handleRegister = (userData) => {
    onRegister(userData);
    if (userData.userType === 'buyer') {
      navigate('/buyer');
    } else {
      navigate('/seller');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <Login onRegister={handleRegister} />
    </div>
  );
};

export default Loginpage;
