const orderService = require('../service/orderService');


const getAll = (_request, response) => {
  
  const orders = await orderService.getAll();

  return response.status(200).json(orders);
}


module.exports = {
  getAll
}