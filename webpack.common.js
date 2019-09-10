const path = require('path')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'demo', 'dist'),
        hot: true,
        compress: true,
        port: 3000,
        inline: true,
        open: true
    },
    entry: {
        launcher: path.resolve(__dirname, 'src', 'Launcher', 'index'),
        app: path.resolve(__dirname, 'src', 'index')
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'demo', 'dist'),
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss'],
        modules: [
            'node_modules',
        ]
    },
    module: {
        rules: [{
            test: /\.m?js(x)?$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ]
                }
            }
        }, {
            test: /\.css$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }]
        }, {
            test: /\.(mp3|png|svg|jpe?g|gif)$/i,
            use: [{
                loader: 'file-loader',
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html'),
            filename: 'index.html'
        })
    ]
}
