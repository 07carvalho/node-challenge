const express = require('express');
const dealsController = require('../controllers/deals');

const router = express.Router();

router.post('/deals', dealsController.getWonDealsAndSave);

module.exports = router;