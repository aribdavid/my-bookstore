const user = require('./userRouter');
const login = require('./loginRouter');
const order = require('./orderRouter');
const book = require('./bookRouter');
const author = require('./authorRouter');
const category = require('./categoryRouter');

module.exports = {
  user,
  login,
  order,
  book,
  author,
  category,
};
