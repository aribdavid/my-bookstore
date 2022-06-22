const authorService = require('../service/authorService');

const getAll = async (_request, response) => {
  const authors = await authorService.getAll();

  return response.status(200).json(authors);
};

module.exports = {
  getAll
}