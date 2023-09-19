const Joi = require("joi");

const createUserSchema = Joi.object().keys({
  name: Joi.string().min(2).max(20).required(),
});

module.exports = {
  createUserSchema,
};
