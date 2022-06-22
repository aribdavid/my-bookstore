const express = require('express');

const rescue = require('express-rescue');
const bookController = require('../controller/bookController');

const tokenAuthenticator = require('../middleware/tokenAuthenticator');

const router = express.Router();


router.get('/book',rescue(tokenAuthenticator), rescue(bookController.getAll));
// router.get('/book/:id', rescue(tokenAuthenticator), rescue(bookController.getById));


module.exports = router;