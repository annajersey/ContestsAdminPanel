const merge = require("webpack-merge");
const webpack = require("webpack");

const baseConfig = require("./webpack.common.js");
const basePath = "/";
module.exports = merge(baseConfig, {
    output: {
        publicPath: basePath
    }, plugins: [
        new webpack.DefinePlugin({
            basePath: JSON.stringify(basePath),
            baseUrl: JSON.stringify("/"),
            salt: "abc"
        }),
    ]
});
