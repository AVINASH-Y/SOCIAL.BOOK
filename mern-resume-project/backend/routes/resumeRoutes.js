// backend/routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.post('/', resumeController.createResume);

module.exports = router;
