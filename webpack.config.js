//const merge = require("webpack-merge");
//const common = require("./webpack.common.js");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const basePath = "/";
const webpack = require("webpack");
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index-bundle.js",
        publicPath: basePath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },

            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g)/i,
                //include: path.join(__dirname, 'assets/images/'),
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            name: "./img/[path]/[name].[ext]",
                            limit: 10000
                        }
                    },
                    {
                        loader: "img-loader"
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                    {
                        loader: "react-svg-loader",
                        options: {
                            svgo: {
                                plugins: [
                                    {
                                        removeTitle: true,
                                    },
                                    {
                                        cleanupIDs: {
                                            prefix: {
                                                toString() {
                                                    this.counter = this.counter || 0;
                                                    return `id-${this.counter++}`;
                                                }
                                            }
                                        }
                                    },
                                ],
                                floatPrecision: 3,
                            },
                            jsx: true
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts/"
                    }
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.DefinePlugin({
            basePath: JSON.stringify(basePath),
            baseUrl: JSON.stringify('http://dcodeit.net/anna.bogomiagkova/smartpay')
        })
    ]
};
