const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  about: { type: String, required: true },
  education: [{
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., '2015 - 2019'
  }],
  experience: [{
		working: { type: String, required: true },
    company: { type: String, required: true },
    position: { type: String, required: true },
    duration: { type: String, required: true }, // e.g., '2020 - Present'
  }],
  projects: [{ 
		name: {type: String, required: true},
		entity: {type: String, required: true},
		duration: { type: String, required: true },
		about: { type: String, required: true },
	}],
  skills: [{ type: String, required: true }],
  awards: [{ 
		name: {type: String, required: true},
		date: {type: String, required: true},
		about: {type: String, required: true},
		}],
  interests: [{ type: String, required: true }],
  // Add more fields as needed for the resume
});

module.exports = mongoose.model('Resume', resumeSchema);