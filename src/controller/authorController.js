const authorService = require('../service/authorService');

const getAll = async (_request, response) => {
  const authors = await authorService.getAll();

  return response.status(200).json(authors);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const author = await authorService.getById(id);

  return response.status(200).json(author);
};

module.exports = {
  getAll,
  getById
}