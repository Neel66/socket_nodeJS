const userService = require("../services/user.services");
const apiHelper = require("../helpers/api.helper");
const { COMMON_MESSAGES } = require("../constants/messages.constant");

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const userData = await userService.create(body);

    if (userData) {
      return apiHelper.success(res, COMMON_MESSAGES.RESOURCE_CREATED, {
        userData,
      });
    }

    return apiHelper.failure(
      res,
      COMMON_MESSAGES.CREATE_ERROR,
      [],
      BAD_REQUEST
    );
  } catch (error) {
    console.log("error createUser :>> ", error);
    return apiHelper.failure(res, error.message);
  }
};

module.exports = { createUser };
