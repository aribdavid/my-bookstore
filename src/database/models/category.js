const Category = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  Category.associate = ({ Book }) => {
    Category.hasMany(Book, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });
  }

  return Category;
};

module.exports = Category;