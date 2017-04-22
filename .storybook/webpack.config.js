/*
   Webpack config for react-storybook
 */
const path = require('path');
const baseDir = path.resolve(__dirname, '../app');

// load the dev config
const devConfig = require('../internals/webpack/webpack.dev.babel');

module.exports = function genConfig(storybookBaseConfig) {
  // concat loaders from dev config
  /* eslint-disable no-param-reassign */
  storybookBaseConfig.module.loaders = storybookBaseConfig.module
                                                          .loaders.concat(devConfig.module.loaders);

  // add the "app" folder to the resolve list
  storybookBaseConfig.resolve.fallback.push(baseDir);

  /*
     workaround for flow-runtime giving error: regeneratorRuntime is not defined,
     https://github.com/codemix/flow-runtime/issues/35
   */
  storybookBaseConfig.entry.preview = ['babel-polyfill']
    .concat(storybookBaseConfig.entry.preview);

  // return the altered config
  return storybookBaseConfig;
};
