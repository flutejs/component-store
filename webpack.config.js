var webpack = require('atool-build/lib/webpack');

module.exports = function(webpackConfig) {

  webpackConfig.plugins.some(function(plugin, i){
    if(plugin instanceof webpack.optimize.CommonsChunkPlugin) {
      webpackConfig.plugins.splice(i, 1);

      return true;
    }
  });

  // Fix ie8 compatibility
  webpackConfig.module.loaders.unshift({
    test: /\.jsx?$/,
    loader: 'es3ify-loader',
  });

  // build UMD files
  webpackConfig.entry = {
    index: './index.js',
  };
  webpackConfig.externals = {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  };
  webpackConfig.output.library = 'componentStore';
  webpackConfig.output.libraryTarget = 'umd';

  webpackConfig.plugins = webpackConfig.plugins
    .filter((plugin) => {
      return !(plugin instanceof webpack.optimize.UglifyJsPlugin);
    });

  return webpackConfig;
};
