const express = require('express');

const rescue = require('express-rescue');
const authorController = require('../controller/authorController');

const tokenAuthenticator = require('../middleware/tokenAuthenticator');

const router = express.Router();


router.get('/author',rescue(tokenAuthenticator), rescue(authorController.getAll));
router.get('/author/:id', rescue(tokenAuthenticator), rescue(authorController.getById));


module.exports = router;