/**
 * Numeric helper functions
 */

const NumberUtil = {
  /**
   * Checks if a given string is a valid number
   * @param {string} string string to evaluate
   * @returns {boolean}
   */
  isNumber(string) {
    if (typeof string != "string") return false;
    return !isNaN(string) && !isNaN(parseFloat(string));
  },
};

export default NumberUtil;
