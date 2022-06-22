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
      foreignKey: 'id',
      as: 'categoryId',
      onDelete: 'CASCADE'
    });
  }

  book.associate = ({ Order }) => {
    book.hasMany(Order, {
      foreignKey: 'bookId',
      onDelete: 'CASCADE'
    });
  }

  return book;
};

module.exports = Book;
