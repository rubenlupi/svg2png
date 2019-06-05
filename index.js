'use strict';

const downloadPng = require('./src/download')();
const bitmapPng = require('./src/bitmap')();

/**
 * main module
 * Calls submodules download and bitmap
 */

const main = () => {
  const download = async params => {
    try {
      return await downloadPng.main(params);
    } catch (err) {
      throw err;
    }
  };

  const bitmap = async params => {
    try {
      return await bitmapPng.main(params);
    } catch (err) {
      throw err;
    }
  };

  return {
    download,
    bitmap
  };
};

module.exports = main;
