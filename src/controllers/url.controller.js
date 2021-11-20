const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { urlService } = require('../services');

const createUrl = catchAsync(async (req, res) => {
  const url = await urlService.createUrl(req.body);
  res.status(httpStatus.CREATED).send(url);
});

module.exports = {
  createUrl,
};
