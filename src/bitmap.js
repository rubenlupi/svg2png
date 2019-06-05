/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const puppeteer = require('puppeteer');
const checkFields = require('./checkFields')();

/**
 * @module bitmap
 * bitmap module
 * Transforms a Svg into a Png and returns the buffer
 */

const bitmap = () => {
  /**
   * Transforms a Svg into a Png and returns the buffer
   *
   * @param {string} stringSvg The string of the svg
   * @param {Object} size width and heigth of the image generated
   * @returns {buffer} If it creates, returns the image buffer
   */
  const main = async ({ stringSvg, size = { width: 1000, height: 560 } }) => {
    try {
      checkFields.checkStringSvg(stringSvg);
      const { width, height } = size;
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();
      await page.setContent(stringSvg);
      const vp = { width: width || 1000, height: height || 560 };
      await page.setViewport(vp);
      const result = await page.screenshot();
      await browser.close();
      return result;
    } catch (err) {
      throw err;
    }
  };

  return {
    main
  };
};

module.exports = bitmap;
