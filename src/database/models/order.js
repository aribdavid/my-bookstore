const Order = (sequelize, DataTypes) => {
  const order = sequelize.define('Order', {
      userId: DataTypes.INTEGER,
      bookId: DataTypes.INTEGER
  });

 
  order.associate = ({ User }) => {
    order.belongsTo(User, {
      foreignKey: 'userId',
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

module.exports = Order;
