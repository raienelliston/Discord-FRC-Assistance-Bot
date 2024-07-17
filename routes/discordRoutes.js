const express = require('express');
const router = express.Router();
const discordBotController = require('../controllers/discordBotController');

router.post('/interact', discordBotController.interact);

module.exports = router;