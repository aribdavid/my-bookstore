const { Book } = require('../database/models');

const getAll = async () => {
  const books = await Book.findAll({
    attributes: {
    },
  });

  return books;
};


module.exports = {
  getAll
}

