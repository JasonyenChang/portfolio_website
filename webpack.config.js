const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv');

module.exports = (env, options) => {
  // 引入全域env環境變數
  dotenv.config({ path: path.resolve(__dirname, `./.env`) });
  // console.log('webpack env', env);
  // console.log('webpack options', options);
  // console.log('process.env.FRONTEND', process.env.FRONTEND);
  return {
    entry: './src/index.tsx',
    // output: {
    //   filename: 'bundle.js',
    // },
    output: {
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.less$/i,
          use: [
            { loader: "style-loader" },
            { loader: "css-loader" },
            {
              loader: "less-loader",
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                }
              }
            }
          ]
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader', 'ts-loader']
        },
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'ts-loader'
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: { name: 'statics/images/[name].[ext]' }
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
          use: [
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 65,
                },
                optipng: {
                  enabled: false, // 表示不啟用這一個圖片優化器
                },
                pngquant: {
                  quality: [0.65, 0.9],
                  speed: 4,
                },
                // gifsicle: {
                //   interlaced: false,
                // },
                // webp: {
                //   quality: 75, // 配置選項表示啟用 WebP 優化器
                // },
              },
            },
          ],
        }
      ],
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components/'),
        containers: path.resolve(__dirname, 'src/containers/'),
        static: path.resolve(__dirname, 'src/statics/'),
        utils: path.resolve(__dirname, 'src/utils/'),
        services: path.resolve(__dirname, 'src/services/'),
        contexthook: path.resolve(__dirname, 'src/contexthook/'),
        "@": path.resolve(__dirname, "src/"),
      },
      extensions: ['.js', '.jsx', '.tsx', '.ts'],
      modules: [
        path.resolve(__dirname, 'src/'),
        path.resolve(__dirname, 'node_modules/'),
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: "./index.html"
      }),
      new webpack.ProvidePlugin({
        React: "react"
      })
      // new Dotenv({
      //   path: './.env', // Path to .env file (this is the default)
      //   safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
      // })
      // new webpack.DefinePlugin({
      //   FRONTEND: JSON.stringify(process.env.FRONTEND)
      // })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
              // bundle all vendor packages into one file
              // name: 'vendor',
              name(module) {
                // get the name. E.g. node_modules/packageName/not/this/part.js
                // or node_modules/packageName
                const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                // npm package names are URL-safe, but some servers don't like @ symbols
                return `vendor.${packageName.replace('@', '')}`;
              },
          }
        }
      },
    }
  };
};
