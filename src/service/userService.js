const { User } = require('../database/models/index'); 
const createError = require('../utils/createError');
const generateToken = require('../utils/jwtGenerator');

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: {
      email,
    },
  });

  return user;
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: {
      exclude: ['password'],
    },
  });

  if (!user) throw createError(404, 'User does not exist');

  return user;
};

const getAll = async () => {
  const users = await User.findAll({
    attributes: {
      exclude: ['password'],
    },
  });

  return users;
};

const createUser = async (  
  firstName,
  lastName,
  email,
  password,
  address,) => {
  const foundUser = await getByEmail(email);

  if (foundUser) throw createError(409, 'User already registered');

  await User.create({
    firstName,
    lastName,
    email,
    password,
    address,
  });

  const token = generateToken(email);

  return token;
};

const deleteUser = async (email) => {
  const user = await getByEmail(email);

  await User.destroy({
    where: {
      id: user.id,
    },
  });
};

module.exports = {
  createUser,
  getAll,
  getById,
  getByEmail,
  deleteUser,
};    