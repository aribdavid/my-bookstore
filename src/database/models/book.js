const Book = (sequelize, DataTypes) => {
  const book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    numberPages: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER
  });

  book.associate = ({ Author }) => {
    book.belongsTo(Author, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE'
    });
  }

  book.associate = ({ Category }) => {
    book.belongsTo(Category, {
      foreignKey: 'categoryId',
      as: 'category',
      onDelete: 'CASCADE'
    });
  }

  return book;
};

module.exports = Book;
