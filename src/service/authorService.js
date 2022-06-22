const { Author } = require('../database/models');

const getAll = async () => {
  const authors = await Author.findAll({
    attributes: {
    },
  });

  return authors;
};


module.exports = {
  getAll
}

