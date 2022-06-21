const Order = (sequelize, DataTypes) => {
  const order = sequelize.define('Order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    bookId: DataTypes.INTEGER,
  });

  order.associate = ({ User }) => {
    order.belongsTo(User, {
      foreignKey: 'id',
      as: 'userId',
      onDelete: 'CASCADE'
    });
  }

  order.associate = ({ Book }) => {
    order.belongsTo(Book, {
      foreignKey: 'id',
      as: 'bookId',
      onDelete: 'CASCADE'
    });
  }

  return order;
};

module.exports = Order;