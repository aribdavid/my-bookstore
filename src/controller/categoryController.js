const categoryService = require('../service/categoryService');

const getAll = async (_request, response) => {
  const categories = await categoryService.getAll();

  return response.status(200).json(categories);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const category = await categoryService.getById(id);

  return response.status(200).json(category);
};

module.exports = {
  getAll,
  getById,
};
