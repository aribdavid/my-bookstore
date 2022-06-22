const express = require('express');

const rescue = require('express-rescue');
const orderController = require('../controller/orderController');
const tokenAuthenticator = require('../middleware/tokenAuthenticator');

const router = express.Router();

router.get('/order', rescue(tokenAuthenticator), rescue(orderController.getAll));
router.post('/order', rescue(orderController.createOrder));

module.exports = router;
