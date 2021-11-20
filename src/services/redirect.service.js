const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const { Url } = require('../models');

/**
 * redirect to longUrl
 * @param {Object} urlCode
 * @returns {Promise<longUrl>}
 */
const urlRedirect = async (urlCode) => {
  const url = await Url.findOne({
    urlCode,
  });
  if (url) {
    return url.longUrl;
  }
  throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Url');
};

module.exports = {
  urlRedirect,
};
