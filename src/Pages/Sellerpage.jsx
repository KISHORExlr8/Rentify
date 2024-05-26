import React from 'react';
import Seller from '../components/Seller';

const Sellerpage = ({ onPropertyPost }) => {
  return (
    <div>
      <h2>Seller Page</h2>
      <Seller onPropertyPost={onPropertyPost} />
    </div>
  );
};

export default Sellerpage;
