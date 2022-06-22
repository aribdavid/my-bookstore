/* eslint-disable camelcase */
const Order = (sequelize, DataTypes) => {
  const order = sequelize.define('Order', {
    userId: DataTypes.INTEGER,
  });

  order.associate = ({ User }) => {
    order.belongsTo(User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };

  order.associate = ({ Order_item }) => {
    order.hasMany(Order_item, {
      foreignKey: 'orderId',
      onDelete: 'CASCADE',
    });
  };

  return order;
};

module.exports = Order;
