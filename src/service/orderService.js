/* eslint-disable camelcase */
const { Order, Order_item, User } = require('../database/models/index');

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user.id;
};

const createOrder = async (email, order_items) => {
  const user = await getByEmail(email);

  const order = await Order.create({
    userId: user,
  });

  const items = order_items;

  if (items.length === 1) {
    await Order_item.create({
      orderId: order.id,
      bookId: items.bookId,
      quantity: items.bookId,
    });
  }

  if (items.length > 1) {
    items.forEach(async (item) => {
      await Order_item.create({
        orderId: order.id,
        bookId: item.bookId,
        quantity: item.bookId,
      });
    });
  }
};

const getAll = async () => {
  const orders = await Order.findAll({
    include: [{
      model: Order_item,
      required: true,
      attributes: ['bookId', 'quantity'],
    }],
    order: [['id', 'ASC']],
  });

  return orders;
};

module.exports = {
  createOrder,
  getAll,
};
