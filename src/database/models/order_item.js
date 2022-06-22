const Order_item = (sequelize, DataTypes) => {
  const order = sequelize.define('Order_item', {
    orderId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  });

 
  order.associate = ({ Order }) => {
    order.belongsTo(Order, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE'
    });
  }

  order.associate = ({ Book }) => {
    order.belongsTo(Book, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  }

  return order;
};

module.exports = Order_item;

 