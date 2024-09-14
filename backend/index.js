// backend/index.js

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const homeScreenRoutes = require('./routes/HomeScreenbackend');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Utilisation des routes
app.use('/homescreen', homeScreenRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
