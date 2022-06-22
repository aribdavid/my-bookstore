const { Category } = require('../database/models');

const getAll = async () => {
  const categories = await Category.findAll({
    attributes: {
    },
  });

  return categories;
};

const getById = async (id) => {
  const category = await Category.findByPk(id, {
    attributes: {
    },
  });

  if (!category) throw createError(404, 'Category does not exist');

  return category;
};

module.exports = {
  getAll,
  getById
}

