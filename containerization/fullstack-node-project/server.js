// server.js (updated)
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 5000;

// Middleware
app.use(cors());  // Enable CORS
app.use(express.json());  // Parse JSON bodies

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});
app.post('/api/data', (req, res) => {
  const { name, email } = req.body;

  // Do something with the data (e.g., store it in a database)
  console.log('Received data:', { name, email });

  // Send a response back to the frontend
  res.status(200).json({
    message: 'Data received successfully!',
    data: { name, email },
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

