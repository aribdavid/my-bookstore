const bookService = require('../service/bookService');

const getAll = async (_request, response) => {
  const books = await bookService.getAll();

  return response.status(200).json(books);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const book = await bookService.getById(id);

  return response.status(200).json(book);
};

module.exports = {
  getAll,
  getById
}