const express = require('express');
const dealsController = require('../controllers/deals');

const router = express.Router();

router.get('/deals', dealsController.getWonDeals);

module.exports = router;