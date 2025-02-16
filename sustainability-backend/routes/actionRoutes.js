const express = require('express');
const router = express.Router();
const { 
    getActions, 
    addAction 
} = require('../controllers/actionControllers');

router.route('/').get(getActions).post(addAction);
// router.route('/:id').get(getAction).put(updateAction).delete(deleteAction);

module.exports = router;   