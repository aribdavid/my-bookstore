const { Book } = require('../database/models');

const getAll = async () => {
  const books = await Book.findAll({
    attributes: {
    },
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id, {
    attributes: {
    },
  });

  if (!book) throw createError(404, 'Book does not exist');

  return book;
};


module.exports = {
  getAll,
  getById
}

