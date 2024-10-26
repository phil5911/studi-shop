const express = require('express');
const app = express();
const port = 3000;

// Middleware to check for API key
app.use((req, res, next) => {
  const apiKey = req.headers['key']; // Access the API key from headers
  const validKey = 'P47$QNDAv8PcFt(=n,7vb84f[8ChJ8855*tb,^]'; // Replace with your valid key

  if (apiKey === validKey) {
    next(); // Proceed to the next middleware/route handler
  } else {
    res.status(403).json({ message: 'Forbidden: Invalid API key' });
  }
});

app.get('/pizzas', (req, res) => {
  const pizzas = [
    { name: 'Marguerita', price: 12 },
    { name: '4 saisons', price: 13 },
    { name: 'Napolitaine', price: 15 },
    { name: 'La spéciale Luigi', price: 14 },
    { name: 'Calzone', price: 16 }
  ];
  res.json(pizzas);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

