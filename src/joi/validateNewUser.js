const joi = require('joi');

module.exports = joi.object({
  firstName: joi.string().min(2).required(),
  lastName: joi.string().min(2).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  address: joi.string().min(4).required(),
});
