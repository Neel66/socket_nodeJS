const userModel = require("../models/user.model");

const create = async (body) => {
  try {
    return await userModel.create(body);
  } catch (error) {
    throw Error(error);
  }
};

module.exports = { create };
