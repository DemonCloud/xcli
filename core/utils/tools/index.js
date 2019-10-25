// file
const existDir = require('./file/existDir');
const walker = require('./file/walker');
// modules
const enquirer = require('./modules/enquirer');
const datefns = require('./modules/datefns');
const fsextra = require('./modules/fsextra');
const struct = require('./modules/struct');
const lodash = require('./modules/lodash');
const axios = require('./modules/axios');
const glob = require('./modules/glob');
// system
const openBrowser = require('./system/openBrowser');
const optimizeCssModulesPlugin = require('./system/optimizeCssModulesPlugin');
// std
const enquirerSelectKeyMapInfo = require('./std/enquirerSelectKeyMapInfo');

module.exports = {
  file: {
    existDir,
    walker,
  },
  modules: {
    enquirer,
    fsextra,
    datefns,
    "date-fns": datefns,
    struct,
    lodash,
    axios,
    glob,
  },
  system: {
    openBrowser,
    optimizeCssModulesPlugin
  },
  std: {
    enquirerSelectKeyMapInfo
  }
};
