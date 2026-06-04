const express = require('express');
const controller = require('../controllers/pageController');

const router = express.Router();

router.get('/', controller.home);
router.get('/dashboard', controller.dashboard);
router.get('/savings-goals', controller.savingsGoals);
router.get('/piggy-bank', controller.piggyBank);
router.get('/transactions', controller.transactions);
router.get('/parent-approval', controller.parentApproval);
router.get('/about', controller.about);

module.exports = router;
