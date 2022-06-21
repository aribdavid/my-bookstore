const userService = require('../service/userService');

const createUser = async (request, response) => {
  const {   
    firstName,
    lastName,
    email,
    password,
    address, 
  } = request.body;

  const token = await userService.createUser(
    firstName,
    lastName,
    email,
    password,
    address,   
    );

   response.status(201).json({ token });
};

const getAll = async (_request, response) => {
  const users = await userService.getAll();

  return response.status(200).json(users);
};

const getById = async (request, response) => {
  const { id } = request.params;
  const users = await userService.getById(id);

  return response.status(200).json(users);
};

const deleteUser = async (request, response) => {
  const { decodedData } = request;
  
  await userService.deleteUser(decodedData);
  
  return response.status(204).end();
};
module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};