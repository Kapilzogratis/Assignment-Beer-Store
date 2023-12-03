// BeerCard.jsx

import React, { useState } from 'react';

const BeerCard = ({ beer }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div style={{ width: '300px', margin: '10px' }}>
      <img
        src={beer.image_url}
        alt={beer.name}
        style={{ width: '100%', height: '200px', objectFit: 'contain' }}
      />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>ABV: {beer.abv}%</p>
      <p>IBU: {beer.ibu}</p>
      <button onClick={toggleDetails}>Read More</button>

      {showDetails && (
        <div>
          <h3>Details</h3>
          <p>{beer.description}</p>
          {/* Add more details as needed */}
        </div>
      )}
    </div>
  );
};

export default BeerCard;
