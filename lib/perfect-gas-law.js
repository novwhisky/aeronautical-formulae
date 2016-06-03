/**
 * Solve for pressure
 * @param ρ density
 * @param Ru universal gas constant
 * @param T temperature
 * @param M0 sea level mean molar mass
 * @returns {number}
 * @formula p = ρRT / M0
 */
function p(ρ, Ru, T, M0) {
  return ρ * Ru * T / M0;
}

/**
 * Solve for density
 * @param p pressure
 * @param Ru universal gas constant
 * @param T temperature
 * @param M0 sea level mean molar mass
 * @returns {number}
 * @formula ρ = p * M0 / RT
 */
function ρ(p, Ru, T, M0) {
  return p * M0 / Ru * T;
}

/**
 * Solve for temperature
 * @param p pressure
 * @param ρ density
 * @param Ru universal gas constant
 * @param M0 sea level mean molar mass
 * @returns {number}
 * @formula T = p * M0 / ρR
 */
function T(p, ρ, Ru, M0) {
  return p * M0 / ρ * Ru;
}

module.exports = {p, ρ, T};
