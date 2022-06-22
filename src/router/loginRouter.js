const express = require('express');
const rescue = require('express-rescue');
const loginController = require('../controller/loginController');

const router = express.Router();

router.post('/login', rescue(loginController));

module.exports = router;