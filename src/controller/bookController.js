const bookService = require('../service/bookService');

const getAll = async (_request, response) => {
  const books = await bookService.getAll();

  return response.status(200).json(books);
};

module.exports = {
  getAll
}