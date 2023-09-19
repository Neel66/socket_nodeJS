const express = require("express");
const router = express.Router();
const { createUser } = require("../../controllers/user.controller");
const { createUserSchema } = require("../../validators/user.validators");
const requestValidatorMiddleware = require("../../middlewares/request-validator.middleware");
const { BODY } = require("../../constants/request-properties.constant");

router.post(
  "/",
  createUser,
  requestValidatorMiddleware([createUserSchema], [BODY])
);

module.exports = router;
