const { UsersModel } = require("../../mongo/models");

const defaultUser = {
  name: "Ted",
  age: "24"
};

const getAll = () => {
  return UsersModel.find({});
};

const getOne = name => {
  return UsersModel.create(name);
  // find one user by name
};

const createDefault = () => {
  // insert default user into db
  return UsersModel.create({ name: defaultUser.name, age: defaultUser.age });
};

const createUser = user => {
  // insert user from POST request into db
  return UsersModel.create({ name: user.name, age: user.age });
};

const updateUser = (name, updates) => {
  // use name as the query and updates for the updates
  return UsersModel.updateOne(
    { name: name },
    { $set: { name: updates.name, age: updates.age } }
  );
};

const deleteUser = name => {
  // use name as the query
  return UsersModel.delateOne({ name: name });
};

module.exports = {
  getAll,
  getOne,
  createDefault,
  createUser,
  updateUser,
  deleteUser
};
