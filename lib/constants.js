var constants = {
  /**
   * Standard acceleration due to gravity (g)
   * @unit m/s^2
   */
  g: 9.80665,

  /**
   * Sea level atmospheric pressure (P0)
   * @description Ambient air pressure at mean sea level
   * @unit pascal (Pa)
   */
  P0: 101325,

  /**
   * Sea level atmospheric density (ρ0)
   * @description Ambient air density at mean sea level
   * @unit kg/m^3
   */
  ρ0: 1.225,

  /**
   * Mean molar mass (M0)
   * @unit kg/kmol
   */
  M0: 28.964420,

  /**
   * Universal gas constant (R*)
   * @unit J/(K • kmol)
   */
  Ru: 8314.32,

  /**
   * Specific gas constant (R)
   * @unit J/(K • kg)
   */
  R: 287.05287,

  /**
   * Sutherland's empirical constants (S)
   * @unit K
   */
  S: 110.4,

  /**
   * Adiabatic index (γ)
   * @description the ratio of the specific heat of air at constant pressure to its specific heat at constant volume
   */
  γ: 1.4
};

module.exports = constants;