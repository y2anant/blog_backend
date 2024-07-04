const express = require('express');
const { signup, login } = require('../controllers/authControllers');
const { getProfile } = require('../controllers/userControllers');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile',auth, getProfile);

module.exports = router;
