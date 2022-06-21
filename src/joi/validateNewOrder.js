const joi = require('joi');

module.exports = joi.object({
  userId: joi.number().required(),
  bookId: joi.number().required(),
});