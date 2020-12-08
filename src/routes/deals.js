const express = require('express');
const pipedriveController = require('../controllers/pipedrive');

const router = express.Router();

router.get('/pipedrive/deals', pipedriveController.getWonDeals);

module.exports = router;