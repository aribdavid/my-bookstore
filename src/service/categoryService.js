const { Category } = require('../database/models');

const getAll = async () => {
  const categories = await Category.findAll({
    attributes: {
    },
  });

  return categories;
};


module.exports = {
  getAll
}

