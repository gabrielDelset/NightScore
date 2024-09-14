const express = require('express');
const router = express.Router();
const { getHomeScreen, getList } = require('../controllers/homeScreenController');

// Définir la route pour le GETdd
router.get('/', getHomeScreen);
router.get('/getlist', getList); 

module.exports = router;
