// server/models/resume.js
const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
	about: { type: String, required: true },
  education: { type: String, required: true },    
  experience: { type: String, required: true },  
	projects: { type: String, required: true },
  skills: { type: String, required: true },
	awards: { type: String, required: true },      
	interests: { type: String, required: true },
  // Add more fields as needed for the resume
}); 

module.exports = mongoose.model('Resume', resumeSchema);
