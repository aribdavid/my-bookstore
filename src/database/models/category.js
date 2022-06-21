const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
  });

  Category.associate = ({ Book }) => {
    Category.hasMany(Book, {
      foreignKey: 'id',
      as: 'book',
      onDelete: 'CASCADE'
    });
  }

  return Category;
};

module.exports = Category;