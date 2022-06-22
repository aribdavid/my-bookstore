module.exports = (request, response, next) => {
  const { email, password } = request.body;

  if (!email || !password) {
    response
      .status(400)
      .json({ message: 'Some required fields are missing' });
  }

  next();
};
