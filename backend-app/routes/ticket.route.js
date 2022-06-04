const express = require('express')
const router = express.Router();
const visitorDataController = require('../controllers/visitorDataController')

router.post('/', ticketDataController.createTicketData);
router.get('/', ticketDataController.getAllTicketData)

module.exports = router;
