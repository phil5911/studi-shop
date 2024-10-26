import React, { useState, useEffect } from 'react';

function AdviceComponent() {
  const [address, setAddress] = useState('');

  useEffect(() => {
    // Fetch the address of the company Studi from the API
    fetch('https://recherche-entreprises.api.gouv.fr/search?q=Studi')
      .then(response => response.json())
      .then(data => {
        if (data.results.length > 0) {
          setAddress(data.results[0].address);
        } else {
          setAddress('Company not found');
        }
      })
      .catch(error => console.error('Error fetching the address:', error));
  }, []); // Empty dependency array ensures this runs once after the initial render

  return (
    <div>
      <h1>Address of Studi</h1>
      <p>{address}</p>
    </div>
  );
}

export default AdviceComponent;
