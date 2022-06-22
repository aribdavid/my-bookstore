const express = require('express');
const rescue = require('express-rescue');
const loginController = require('../controller/loginController');
const loginValidator = require('../middleware/loginValidator');

const router = express.Router();

router.post('/login', rescue(loginValidator), rescue(loginController));

module.exports = router;
