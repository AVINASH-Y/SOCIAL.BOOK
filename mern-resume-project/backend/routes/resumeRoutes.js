const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.post('/', resumeController.createResume);
router.get('/', resumeController.getResume);

module.exports = router;
