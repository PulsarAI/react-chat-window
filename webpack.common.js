const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
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
        new CleanWebpackPlugin()
    ]
}
