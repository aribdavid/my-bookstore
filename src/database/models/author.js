const Author = (sequelize, DataTypes) => {
  const author = sequelize.define('Author', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY,
  });

  author.associate = ({ Book }) => {
    author.hasMany(Book, {
      foreignKey: 'id',
      as: 'book',
      onDelete: 'CASCADE'
    });
  }

  return author;
};

module.exports = Author;