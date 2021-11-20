/* eslint-disable no-useless-concat */
const validUrl = require('valid-url');
const { nanoid } = require('nanoid');
const httpStatus = require('http-status');
const { Url } = require('../models');
const ApiError = require('../utils/ApiError');
const config = require('../config/config');

/**
 * Create a shortUrl
 * @param {Object} longUrl
 * @returns {Promise<ShortUrl>}
 */

const createUrl = async ({ longUrl }) => {
  const domain = `${config.domain}`;
  const urlCode = nanoid(5);

  if (validUrl.isUri(longUrl)) {
    const url = await Url.findOne({ longUrl });

    if (url) {
      return url;
    }
    const shortUrl = `${domain}/` + `short.ly/${urlCode}`;
    const createdUrl = Url.create({
      longUrl,
      shortUrl,
      urlCode,
      date: new Date(),
    });
    return createdUrl;
  }

  throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Url');
};

module.exports = {
  createUrl,
};
