const Book = (sequelize, DataTypes) => {
  const book = sequelize.define('Book', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    numberPages: DataTypes.INTEGER,
    releaseYear: DataTypes.INTEGER
  });

  book.associate = ({ Author }) => {
    book.belongsTo(Author, {
      foreignKey: 'authorId',
      onDelete: 'CASCADE'
    });
  }

  book.associate = ({ Category }) => {
    book.belongsTo(Category, {
      foreignKey: 'categoryId',
      onDelete: 'CASCADE'
    });
  }

  book.associate = ({ Order_item }) => {
    book.hasMany(Order_item, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  }

  return book;
};

module.exports = Book;
