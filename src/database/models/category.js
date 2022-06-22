const Category = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING,
  });

  category.associate = ({ Book }) => {
    category.hasMany(Book, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE',
    });
  };

  return category;
};

module.exports = Category;
