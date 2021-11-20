const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { redirectService } = require('../services');

const redirectUrl = catchAsync(async (req, res) => {
  const redirect = await redirectService.urlRedirect(req.params.uniqueCode);
  if (!redirect) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Url not found');
  }
  res.redirect(redirect);
});

module.exports = {
  redirectUrl,
};
