const Joi = require('joi');

const redirectUrl = {
  params: Joi.object().keys({
    uniqueCode: Joi.string(),
  }),
};

module.exports = {
  redirectUrl,
};
