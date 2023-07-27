// backend/models/resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  education: { type: String, required: true },    // New field for education
  experience: { type: String, required: true },  // New field for experience
  skills: { type: String, required: true },      // New field for skills
  // Add more fields as needed for the resume
});

module.exports = mongoose.model('Resume', resumeSchema);
