const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
                './src/js/index.js',
                './src/scss/style.scss'
            ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },{
            test: /\.(sass|scss)$/,
            include: path.resolve(__dirname, 'src/scss'),
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true,
                        minimize: true,
                        url: false
                    }
                },
                {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
                                browsers:['ie >= 8', 'last 4 version']
                            })
                        ],
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                    sourceMap: true
                    }
                }]
            })
            
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './css/style.css'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: './src/html/index.html',
            filename: 'index.html'
        }),
        new CopyWebpackPlugin([{
            from: './src/img',
            to: './img'
        },
        {
            from: './src/fonts',
            to: './fonts'
        }]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};

