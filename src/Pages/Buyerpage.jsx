import React from 'react';
import Buyer from '../components/Buyer';

const Buyerpage = ({ properties }) => {
  return (
    <div>
      <h2>Buyer Page</h2>
      <Buyer properties={properties} />
    </div>
  );
};

export default Buyerpage;
