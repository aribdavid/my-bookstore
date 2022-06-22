const schemaNewUser = require('../joi/validateNewUser');

module.exports = (request, response, next) => {
  const {
    firstName,
    lastName,
    email,
    password,
    address,
  } = request.body;

  const { error } = schemaNewUser.validate({
    firstName,
    lastName,
    email,
    password,
    address,
  });

  if (error) throw response.status(400).json({ message: error.message });

  next();
};
