const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors({
  origin: 'https://gentle-sea-0140be11e.6.azurestaticapps.net/', // Replace with your React app's URL
  methods: 'GET,POST',
  credentials: true
}));

app.listen(4000, () => console.log('Server running on port 4000'));