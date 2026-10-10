// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展

var path = require('path');

module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push(['import', {
    libraryName: 'antd',
    style: 'css',
  }]);

  webpackConfig.module.loaders.forEach(function(rule) {
    var testSource = rule.test && rule.test.toString();
    if (testSource && testSource.indexOf('png') !== -1) {
      rule.exclude = /reports[\\/]figures[\\/]/;
    }
  });

  webpackConfig.module.loaders.push({
    test: /reports[\\/]figures[\\/].+\.png$/,
    loader: require.resolve('url-loader') + '?limit=100000',
  });
  webpackConfig.module.loaders.push({
    test: /\.md$/,
    loader: path.resolve(__dirname, 'md-loader.js'),
  });

  return webpackConfig;
};
