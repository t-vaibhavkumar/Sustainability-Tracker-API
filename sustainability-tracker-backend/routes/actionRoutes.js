const express = require('express');
const router = express.Router();
const { 
    getActions, 
    addAction 
} = require('../controllers/actionControllers');

router.route('/').get(getActions).post(addAction);

module.exports = router;   