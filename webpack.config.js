const path = require('path');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

process.env.NODE_ENV = process.env.NODE_ENV || 'development'; // if no defined env then it will be dev mode
 
if(process.env.NODE_ENV === 'test'){
  require('dotenv').config({ path: '.env.test'})
} else if(process.env.NODE_ENV === 'development'){
  require('dotenv').config({ path: '.env.development'})
}

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';
  const CSSExtract = new MiniExtractCSSPlugin({filename: 'style.css'});
  return {
    mode: isProduction ? 'production' : 'development',
    entry: ['@babel/polyfill', './src/app.js'],
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      },{
        test: /\.s?css$/,
          use: [
            {
              loader: MiniExtractCSSPlugin.loader  
              // 'style-loader'
            },
            {
            loader: 'css-loader',
            options: {
              sourceMap: true
            } 
          }, 
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            } 
          }]
      }]
    },
    plugins: [
      CSSExtract,
      new webpack.DefinePlugin({
        'process.env.FIREBASE_API_KEY': JSON.stringify(process.env.FIREBASE_API_KEY),
        'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
        'process.env.FIREBASE_DATABASE_URL': JSON.stringify(process.env.FIREBASE_DATABASE_URL),
        'process.env.FIREBASE_PROJECT_ID': JSON.stringify(process.env.FIREBASE_PROJECT_ID),
        'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
        'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID)
      })
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
      port: 5000,
      publicPath: '/dist/'
    }
  }
};