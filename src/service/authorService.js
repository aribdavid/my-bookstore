const { Author } = require('../database/models');
const createError = require('../utils/createError');

const getAll = async () => {
  const authors = await Author.findAll({
    attributes: {
    },
  });

  return authors;
};

const getById = async (id) => {
  const author = await Author.findByPk(id, {
    attributes: {
    },
  });

  if (!author) throw createError(404, 'Author does not exist');

  return author;
};

module.exports = {
  getAll,
  getById,
};
