// ------------------------------------------------------------------
// Default Dependencies
// ------------------------------------------------------------------

var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var NODE_ENV = process.env.NODE_ENV;
var rootPath = path.resolve(__dirname);

// ------------------------------------------------------------------
// Plugins 
// ------------------------------------------------------------------

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpackUglifyJsPlugin = require('webpack-uglify-js-plugin');

// ------------------------------------------------------------------
// PostCSS Plugins
// ------------------------------------------------------------------

var autoprefixer = require('autoprefixer');
var precss = require('precss');
var postcssImport = require('postcss-import');
var pxtorem = require('postcss-pxtorem');

// ------------------------------------------------------------------
// Initialize Config
// ------------------------------------------------------------------

var config = {
  entry: [path.resolve(rootPath, 'app/src/main.jsx')],
  output: {
    path: path.resolve(rootPath, 'build/'),
    filename: 'build_[hash].js'
  },
  resolve: {
    root: rootPath,
    alias: {
      assets: 'app/assets',
      javascripts: 'app/src',
      fonts: 'app/assets/fonts'
    },
    extensions: ['', '.js', '.jsx', '.scss', '.png']
  },
  plugins: [
    new ExtractTextPlugin( path.resolve(rootPath, '[name].css'), {allChunks: true} ),
    new HtmlWebpackPlugin({
      template: path.resolve(rootPath, 'app/templates/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  postcss: function (webpack) {
    return [
      precss,
      autoprefixer,
      postcssImport({
        addDependencyTo: webpack
      })
    ]
  },

  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loaders: ['react-hot', 'babel?presets[]=react&presets[]=es2015&presets[]=stage-2'],
        include: path.resolve( rootPath, 'app' )
      },
      {
        test: /.s?css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!sass-loader"),
      },
      {
        test: /\.(ttf|otf|eot|woff(2)?)(\?[\w]+)?$/,
        loader: 'base64-font-loader'
      }, 
      {
        test: /\.(jpe?g|png|gif|png)$/i,
        loader: 'file-loader?name=/assets/[hash].[ext]'
      },
      {
        test: /\.(svg)$/i,
        loader:'svg-inline'
      }     
    ]
  }  
}

// ------------------------------------------------------------------
// Env Config
// ------------------------------------------------------------------

if ( NODE_ENV ){
  module.exports = merge(config, {
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(rootPath, 'app/templates/index.html'),
        title: '',
        filename: 'index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin("[name]_[hash].css", {allChunks: true}),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        mangle: {
          except: ['$super', '$', 'exports', 'require']
        }
      })   
    ]
  })
} else {
  module.exports = merge(config, {
    debug: true
  });  
}