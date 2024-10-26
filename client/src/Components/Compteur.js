import React, { useState } from 'react';

function Compteur() {
  const [count, setCount] = useState(0); // Initialisation du state

  return (
    <div>
      <h1>Compteur: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}

export default Compteur;
