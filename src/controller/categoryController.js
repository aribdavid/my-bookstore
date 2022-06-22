const categoryService = require("../service/categoryService")

const getAll = async (_request, response) => {
  const categories = await categoryService.getAll();

  return response.status(200).json(categories);
};

module.exports = {
  getAll
}