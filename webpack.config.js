const path = require('path')

module.exports = {
    entry: ["@babel/polyfill",'./src/index.js'],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        extensions: [".js", ".jsx"]
      },
    devtool: "source-map",
    module: {
        rules: [
            {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
            }
        ]
    }
}