/* eslint-disable lines-around-directive */
/* eslint-disable strict */
'use strict';

const puppeteer = require('puppeteer');
const checkFields = require('./checkFields')();

/**
 * @module download
 * download module
 * Transforms a Svg into a Png and downlaod the image in specified directory
 */

const download = () => {
  /**
   * Get the entire name of a file, concat path and name
   * If no name destinyPath is given, it will throw an error
   * If no fileName is given, it will give a name by default
   *
   * @param {string} destinyPath
   * @param {string} fileName
   * @returns {string}
   */
  const getFileName = ({ destinyPath, fileName }) => {
    checkFields.checkDestintyPath(destinyPath);
    return fileName ? `${destinyPath}\\${fileName}.png` : `${destinyPath}\\default.png`;
  };

  /**
   * Transforms a Svg into a Png and download it in destinyPath
   *
   * @param {string} stringSvg The string of the svg
   * @param {string} destinyPath Directory to download Image
   * @param {string} fileName Name to download Image (without extension)
   * @param {Object} size width and heigth of the image generated
   * @returns {path} If it creates, returns the image path
   */
  const main = async ({
    stringSvg,
    destinyPath,
    fileName,
    size = { width: 1000, height: 560 }
  }) => {
    try {
      checkFields.checkDestintyPath(destinyPath);
      checkFields.checkStringSvg(stringSvg);
      const path = getFileName({ destinyPath, fileName });
      const { width, height } = size;
      const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();
      await page.setContent(stringSvg);
      const vp = { width, height };
      await page.setViewport(vp);
      await page.screenshot({ path });
      await browser.close();
      return path;
    } catch (err) {
      throw err;
    }
  };

  return {
    main
  };
};

module.exports = download;
