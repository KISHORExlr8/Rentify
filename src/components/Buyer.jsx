import React, { useState } from 'react';
import './Buyer.css';

const Buyer = ({ properties = [] }) => {
  const [filters, setFilters] = useState({
    place: '',
    bedrooms: '',
    bathrooms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredProperties = properties.filter((property) => {
    return (
      (filters.place === '' || property.place.includes(filters.place)) &&
      (filters.bedrooms === '' || property.bedrooms === filters.bedrooms) &&
      (filters.bathrooms === '' || property.bathrooms === filters.bathrooms)
    );
  });

  return (
    <div className="buyer-container">
      <h2>Available Properties</h2>
      <div className="filter-section">
        <div>
          <label>Filter by Place:</label>
          <input
            type="text"
            name="place"
            value={filters.place}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Filter by Bedrooms:</label>
          <input
            type="text"
            name="bedrooms"
            value={filters.bedrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Filter by Bathrooms:</label>
          <input
            type="text"
            name="bathrooms"
            value={filters.bathrooms}
            onChange={handleChange}
          />
        </div>
      </div>
      <ul className="property-list">
        {filteredProperties.map((property, index) => (
          <li key={index}>
            {property.place}, {property.area}, {property.bedrooms} bedrooms, {property.bathrooms} bathrooms, Nearby: {property.nearbyFacilities}
            <button onClick={() => alert(`Interested in property at ${property.place}`)}>I'm Interested</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Buyer;
