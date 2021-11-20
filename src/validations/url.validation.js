const Joi = require('joi');

const createUrl = {
  body: Joi.object().keys({
    longUrl: Joi.string().required(),
  }),
};

module.exports = {
  createUrl,
};
