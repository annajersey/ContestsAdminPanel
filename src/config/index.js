const global = require('./config.global');

let env;
if (process.env.NODE_ENV === 'development') {
    env = require('./config.dev');
} else {
    env = require('./config.prod');
}

export const config = Object.assign(global, env.config);
