const schemaNewBook = require('../joi/validateNewBook');

module.exports = (request, response, next) => {
  const { 
    title,
    description,
    numberPages,
    categoryId,
    authorId,
    releaseYear, } = request.body;

  const { error } = schemaNewBook.validate({  
    title,
    description,
    numberPages,
    categoryId,
    authorId,
    releaseYear, 
  });

  if (error) throw response.status(400).json({ message: error.message });

  next();
};