// Universal gas constant
var Ru = require('./constants').Ru;

// Sea-level mean molar mass
var M0 = require('./constants').M0;

/**
 * Solve for pressure
 * @param ρ density
 * @param T temperature
 * @returns {number}
 * @formula p = ρRT / M0
 */
function p(ρ, T) {
  return ρ * Ru * T / M0;
}

/**
 * Solve for density
 * @param p pressure
 * @param T temperature
 * @returns {number}
 * @formula ρ = p * M0 / RT
 */
function ρ(p, T) {
  return p * M0 / Ru * T;
}

/**
 * Solve for temperature
 * @param p pressure
 * @param ρ density
 * @returns {number}
 * @formula T = p * M0 / ρR
 */
function T(p, ρ) {
  return p * M0 / ρ * Ru;
}

module.exports = {p, ρ, T};
