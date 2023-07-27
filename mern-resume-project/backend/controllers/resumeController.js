// backend/controllers/resumeController.js
const Resume = require('../models/resume');

const createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create the resume' });
  }
};

module.exports = { createResume };
