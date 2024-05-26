import React, { useState } from 'react';
import './Buyer.css';

const Seller = () => {
  const [properties, setProperties] = useState([]);
  const [property, setProperty] = useState({
    place: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    nearbyFacilities: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({
      ...property,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProperties([...properties, property]);
    setProperty({
      place: '',
      area: '',
      bedrooms: '',
      bathrooms: '',
      nearbyFacilities: '',
    });
  };

  const handleDelete = (index) => {
    const newProperties = properties.filter((_, i) => i !== index);
    setProperties(newProperties);
  };

  const handleUpdate = (index) => {
    const updatedProperty = properties[index];
    setProperty(updatedProperty);
    handleDelete(index);
  };

  return (
    <div>
      <h2>Post a Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Place:</label>
          <input
            type="text"
            name="place"
            value={property.place}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Area:</label>
          <input
            type="text"
            name="area"
            value={property.area}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bedrooms:</label>
          <input
            type="text"
            name="bedrooms"
            value={property.bedrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Bathrooms:</label>
          <input
            type="text"
            name="bathrooms"
            value={property.bathrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Nearby Facilities:</label>
          <input
            type="text"
            name="nearbyFacilities"
            value={property.nearbyFacilities}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Post Property</button>
      </form>
      <h2>My Properties</h2>
      <ul>
        {properties.map((prop, index) => (
          <li key={index}>
            {prop.place}, {prop.area}, {prop.bedrooms} bedrooms, {prop.bathrooms} bathrooms, Nearby: {prop.nearbyFacilities}
            <button onClick={() => handleUpdate(index)}>Update</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Seller;