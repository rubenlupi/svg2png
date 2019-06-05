/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const fs = require('fs');

/**
 * @module checkFields
 * checkFields module
 * Check if the entry fields has expected values
 */

const checkFields = () => {
  /**
   * Checks stringSvg is not undefined
   *
   * @param {string} stringSvg The string of the svg
   * @returns {boolean}
   */
  const checkStringSvg = stringSvg => {
    if (!stringSvg) throw Error('stringSvg must be filled');
  };

  /**
   * Checks destinyPath exists as a directory
   *
   * @param {string} destinyPath The string of the svg
   * @returns {boolean}
   */
  const checkDestintyPath = destinyPath => {
    if (!fs.existsSync(destinyPath)) throw Error('destinyPath does not exists');
  };

  return {
    checkStringSvg,
    checkDestintyPath
  };
};

module.exports = checkFields;
