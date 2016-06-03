var r = require('./constants').r;

/**
 * Converts geometric altitude to geopotential altitude
 * @param h
 * @returns {number}
 */
function H(h) {
  return r * h / (r+h);
}

/**
 * Converts geopotential altitude to geometric altitude
 * @param H
 * @returns {number}
 */
function h(H) {
  return r * H / (r - H);
}

module.exports = {h, H};