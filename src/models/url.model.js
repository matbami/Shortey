const mongoose = require('mongoose');

const urlSchema = mongoose.Schema(
  {
    urlCode: {
      type: String,
    },
    longUrl: {
      type: String,
    },
    shortUrl: {
      type: String,
    },
    date: {
      type: String,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

/**
 * @typedef Url
 */
const Url = mongoose.model('Url', urlSchema);

module.exports = Url;
