const express = require('express');
const app = express();
const port = 3000;

app.get('/healthcheck', (req, res) => {
  res.json({ message: 'alive' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
