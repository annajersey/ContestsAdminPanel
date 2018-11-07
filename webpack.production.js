const merge = require("webpack-merge");
const baseConfig = require("./webpack.common.js");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MinifyPlugin = require("babel-minify-webpack-plugin");
module.exports = merge(baseConfig, {
    output: {
        publicPath: "/anna.bogomiagkova/smartpay/"
    },
    optimization: {
        minimizer: [
            new MinifyPlugin(),
            new OptimizeCSSAssetsPlugin({})
        ]
    }
});

