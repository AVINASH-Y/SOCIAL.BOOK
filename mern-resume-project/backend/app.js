// backend/server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const resumeRoutes = require('./routes/resumeRoutes');
const path = require('path'); // Import the path module

const app = express();
const PORT = 8010;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://jayvardhansadhu:rujulasadhu@cluster0.qr727zx.mongodb.net/OFFICIALPROJECT?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
app.use('/api/resume', resumeRoutes);


// New route to serve the form page
app.get('/form', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// New route to serve the resume page
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

// Serve the static files from the React app (frontend) in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
}

// New route to fetch resume data
app.get('/api/resume', async (req, res) => {
  try {
    // Implement the logic to fetch the resume data from the database
    // For simplicity, we'll assume there's only one resume entry and return it
    const resume = await Resume.findOne();
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch resume data' });
  }
});

// In production, for any other routes, serve the React app
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});