const abcJSON = require(process.cwd()+"/abc.json");
const postcss_preset = require(require.resolve("postcss-preset-env"))({
  browsers: abcJSON.wap ?
  ['last 2 versions', 'iOS >= 6', "Android >= 4.3", "IE 10", "not dead"] :
  ['last 2 versions', 'IE 10', 'iOS >= 10', 'Android >= 8']
});
const postcss_clean = require(require.resolve("postcss-clean"))({ level: 2 });
// const postcss_momentum_scrolling = require(require.resolve("postcss-momentum-scrolling"));
const postcss_no_important = require(require.resolve('postcss-no-important'))({});
const postcss_pxtorem = require(require.resolve("postcss-pxtorem"))({
  rootValue: 75,
  unitPrecision: 5,
  propList: ['*','!border*','!box-shadow','!filter','!-webkit-filter'],
  selectorBlackList: [],
  replace: true,
  mediaQuery: false,
  minPixelValue: 1
});
//const postcss_uncss= require(require.resolve("postcss-uncss"))({ html: ['*.html','**/*.html']});

const postcss_plugins = process.env.NODE_ENV !== "production" ?
// devServer
(abcJSON.wap ?[
  postcss_pxtorem
] : []) :
// production build
(abcJSON.wap ? [
  postcss_preset,
  postcss_clean,
  // postcss_momentum_scrolling,
  postcss_no_important,
  //postcss_uncss,
  postcss_pxtorem
] : [
  postcss_preset,
  postcss_clean,
  // postcss_momentum_scrolling,
  postcss_no_important,
  //postcss_uncss
]);

module.exports = {
  ident: 'postcss',
  syntax: require.resolve('postcss-scss'),
  plugins: postcss_plugins,
};