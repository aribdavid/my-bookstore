const express = require('express');

const rescue = require('express-rescue');
const categoryController = require('../controller/categoryController');

const tokenAuthenticator = require('../middleware/tokenAuthenticator');

const router = express.Router();


router.get('/category',rescue(tokenAuthenticator), rescue(categoryController.getAll));
// router.get('/category/:id', rescue(tokenAuthenticator), rescue(categoryController.getById));


module.exports = router;