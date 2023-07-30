require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");
const cookiParser = require("cookie-parser")
const port = 8010;

const resumeRoutes = require('./routes/resumeRoutes');
const path = require('path'); // Import the path module
const bodyParser = require('body-parser');

// app.get("/",(req,res)=>{
//     res.status(201).json("server created")
// });

app.use(express.json());
app.use(cookiParser());
app.use(cors());
app.use(router);
// Routes
app.use('/api/resume', resumeRoutes);


// New route to serve the form page
app.get("/resume-form", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// New route to serve the resume page
app.get('/resume', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Serve the static files from the React app (client) in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
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
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

app.listen(port,()=>{
    console.log(`server start at port no : ${port}`);
})