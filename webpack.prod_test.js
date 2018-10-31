const merge = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
module.exports =  (env, options) => {
    console.log(`This is the Webpack 4 'mode': ${options.mode}`);
    const basePath = '/anna.bogomiagkova/smartpay/';
    return merge(baseConfig, {

    })}
