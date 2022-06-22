const joi = require('joi');

module.exports = joi.object({

  title: joi.string().min(2).required(),
  description: joi.string().min(6).required(),
  numberPages: joi.number().required(),
  categoryId: joi.number().required(),
  authorId: joi.number().required(),
  releaseYear: joi.number().min(4).required(),

});
