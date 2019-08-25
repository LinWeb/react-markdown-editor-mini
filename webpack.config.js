const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.join(__dirname, './public/index.html'),
            filename: "index.html"
        })
    ]
}