const { Order, Order_item } = require('../database/models/index'); 
const createError = require('../utils/createError');
const userService = require('./userService');



const createOrder = async ( email, order_items) => {

  const user = userService.getByEmail(email);
  const items  = order_items;

  const order = await Order.create({
    userId: user.id
  });
  
  if(items.length === 1){
  await Order_item.create({
    orderId: order,
    bookId: items.bookId,
    quantity: items.bookId,
  })
  }

  if(items.length > 1){
    items.forEach((item) => {
      await Order_item.create({
        orderId: order,
        bookId: item.bookId,
        quantity: item.bookId,
      })
    })

    }

};

const getAll = async () => {
  const orders = await Order.findAll({
    attributes: attributes,
    include: [{
      model: Order_item,
      required: true,
      attributes: ['bookId', 'quantity']
    }],
    order:[['id', 'ASC']]
  });

  return orders;
};

module.exports = {
  createOrder,
  getAll,
};    