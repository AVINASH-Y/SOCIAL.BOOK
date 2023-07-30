// server/controllers/resumeController.js

const Resume = require('../models/Resume');

const createResume = async (req, res) => {
  try {
    const resume = new Resume(req.body);
    await resume.save();
    res.status(201).json(resume);
  } catch (error) {
    res.status(400).json({ error: 'Unable to create the resume' });
  }
};

const getResume = async (req, res) => {
  try {
    const resume = await Resume.findOne();
    res.status(200).json(resume);
  } catch (error) {
    res.status(500).json({ error: 'Unable to fetch resume data' });
  }
};

module.exports = { createResume, getResume };