const path = require('path')
const merge = require('webpack-merge')

const common = require('./webpack.common.js')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: path.resolve(__dirname, 'src', 'Launcher', 'index'),
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'lib')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
})
