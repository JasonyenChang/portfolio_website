const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const basePath = isProd ? '/portfolio_website/' : '/';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      publicPath: basePath
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
        },
        {
          test: /\.less$/i,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: { javascriptEnabled: true }
              }
            }
          ]
        },
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: ['ts-loader']
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          use: [
            {
              loader: 'file-loader',
              options: { name: 'statics/images/[name].[contenthash].[ext]' }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: { progressive: true, quality: 65 },
                optipng: { enabled: false },
                pngquant: { quality: [0.65, 0.9], speed: 4 }
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        static: path.resolve(__dirname, 'src/statics/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        services: path.resolve(__dirname, 'src/services/'),
        contexthook: path.resolve(__dirname, 'src/contexthook/'),
        '@': path.resolve(__dirname, 'src/')
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html'
      }),
      new webpack.ProvidePlugin({ React: 'react' })
    ],
    optimization: {
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: { chunks: 'all' }
    }
  };
};
