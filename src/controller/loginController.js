const loginService = require('../service/loginService');

module.exports = async (request, response) => {
  const token = await loginService(request, response);

  return response.status(200).json({ token });
};