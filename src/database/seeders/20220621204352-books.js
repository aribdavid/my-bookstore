'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      'Book',
      [
        {
          title: "The Fellowship of the Ring",
          description: 'The Fellowship of the Ring is the first of three volumes of the epic novel[2] The Lord of the Rings by the English author J. R. R. Tolkien. It is followed by The Two Towers and The Return of the King. It takes place in the fictional universe of Middle-earth, and was originally published on 29 July 1954 in the United Kingdom.',
          numberPages: 423,
          categoryId: 1,
          authorId: 1,
          releaseYear: "1954",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "The Two Towers",
          description: "The Two Towers is the second volume of J. R. R. Tolkien's high fantasy novel The Lord of the Rings. It is preceded by The Fellowship of the Ring and followed by The Return of the King.",
          numberPages: 	352,
          categoryId: 1,
          authorId: 1,
          releaseYear: "1954",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "The Return of the King",
          description: "The Return of the King is the third and final volume of J. R. R. Tolkien's The Lord of the Rings, following The Fellowship of the Ring and The Two Towers. It was published in 1955. The story begins in the kingdom of Gondor, which is soon to be attacked by the Dark Lord Sauron.",
          numberPages: 416,
          categoryId: 1,
          authorId: 1,
          releaseYear: "1955",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "Prelude to Foundation",
          description: "Prelude to Foundation is a novel by American writer Isaac Asimov, published in 1988. It is one of two prequels to the Foundation series. For the first time, Asimov chronicles the fictional life of Hari Seldon, the man who invented psychohistory and the intellectual hero of the series. The novel was nominated for the Locus Award.[2]",
          numberPages: 403,
          categoryId: 2,
          authorId: 2,
          releaseYear: "1988",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "Forward the Foundation",
          description: "Forward the Foundation is a novel by American writer Isaac Asimov, published posthumously in 1993. It is the second of two prequels to the Foundation Series. It is written in a format similar to that of the original book, Foundation, composed of chapters with long intervals in between, although Forward takes place within only one lifetime. Both books were first published as independent short stories in science fiction magazines.",
          numberPages: 417,
          categoryId: 2,
          authorId: 2,
          releaseYear: "1993",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "Foundation",
          description: "Foundation is a science fiction novel by American writer Isaac Asimov. It is the first published in his Foundation Trilogy (later expanded into the Foundation series). Foundation is a cycle of five interrelated short stories, first published as a single book by Gnome Press in 1951. Collectively they tell the early story of the Foundation, an institute founded by psychohistorian Hari Seldon to preserve the best of galactic civilization after the collapse of the Galactic Empire." ,
          numberPages: 255,
          categoryId: 2,
          authorId: 2,
          releaseYear: "1951",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "One Hundred Years of Solitude",
          description: "One Hundred Years of Solitude (Spanish: Cien años de soledad, American Spanish: [sjen ˈaɲoz ðe soleˈðað]) is a 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the (fictitious) town of Macondo. The novel is often cited as one of the supreme achievements in literature.",
          numberPages: 352,
          categoryId: 4,
          authorId: 3,
          releaseYear: "1967",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },  
        {
          title: "The Age of Revolution: Europe 1789–1848",
          description: "Hobsbawm analysed the early 19th century, and indeed the whole process of modernisation thereafter, using what he calls the twin revolution thesis. This thesis recognised the dual importance of the French Revolution and the Industrial Revolution as midwives of modern European history, and – through the connections of colonialism and imperialism – world history." ,
          numberPages: 366,
          categoryId: 3,
          authorId: 4,
          releaseYear: "1962",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "The Age of Capital: 1848–1875",
          description: "Hobsbawm analyzed the 19th and 20th century processes of modernization using what he calls the dual revolution thesis, which recognized the dual importance of the French Revolution and the Industrial Revolution as midwives of modern European history, and (through the connections of colonialism and imperialism) world history." ,
          numberPages: 384,
          categoryId: 3,
          authorId: 4,
          releaseYear: "1975",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "The Age of Empire: 1875–1914",
          description: "The Age of Empire: 1875–1914 is a book by the British historian Eric Hobsbawm, published in 1987. It is the third in a trilogy of books about 'the long 19th century' (coined by Hobsbawm), preceded by The Age of Revolution: Europe 1789–1848 and The Age of Capital: 1848–1875. A fourth book, The Age of Extremes: The Short Twentieth Century, 1914–1991, acts as a sequel to the trilogy.",
          numberPages: 404,
          categoryId: 3,
          authorId: 4,
          releaseYear: "1987",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: "Crime and Punishment",
          description: "Crime and Punishment follows the mental anguish and moral dilemmas of Rodion Raskolnikov, an impoverished ex-student in Saint Petersburg who plans to kill an unscrupulous pawnbroker, an old woman who stores money and valuable objects in her flat. He theorises that with the money he could liberate himself from poverty and go on to perform great deeds, and seeks to convince himself that certain crimes are justifiable if they are committed in order to remove obstacles to the higher goals of 'extraordinary' men. Once the deed is done, however, he finds himself racked with confusion, paranoia, and disgust. His theoretical justifications lose all their power as he struggles with guilt and horror and confronts both the internal and external consequences of his deed.",
          numberPages: 543,
          categoryId: 4,
          authorId: 5,
          releaseYear: "1866",
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },


      ],

      {},

    )
  },

  async down(queryInterface, _Sequelize) {
    return queryInterface.bulkDelete('Book', null, {});
  }
};
