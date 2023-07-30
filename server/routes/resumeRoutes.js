const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

router.post("/dash", resumeController.createResume);
router.get("/dash", resumeController.getResume);

module.exports = router;
