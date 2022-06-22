const orderService = require('../service/orderService');

const createOrder = async (request, response) => {
  const {
    email,
    // eslint-disable-next-line camelcase
    order_items,
  } = request.body;

  const token = await orderService.createOrder(
    email,
    order_items,
  );

  response.status(201).json({ token });
};

const getAll = async (_request, response) => {
  const orders = await orderService.getAll();

  return response.status(200).json(orders);
};

module.exports = {
  getAll,
  createOrder,
};
