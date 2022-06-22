const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.STRING
  });

  user.associate = ({ Order }) => {
    user.hasMany(Order, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  }  

  return user;
};

module.exports = User;