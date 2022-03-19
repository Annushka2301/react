const path = require('path');

const NOVE_ENV = process.env.NOVE_ENV;

module.exports = {
    mode: NOVE_ENV ? NOVE_ENV : 'development',
    entry: path.resolve(__dirname, 'src/index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    }
};