 const path = require('path');
 const HtmlWebPackPlugin = require('html-webpack-plugin');

 module.exports = {
     devtool: 'source-map',
     entry: './src/index.js',
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
     },

     module: {
         rules: [
             {
                 test: /\.(js|jsx)$/,
                 exclude: /node_modules/,
                 use: {
                     loader: "babel-loader",
                     options: {
                        presets: ['@babel/preset-react']
                    }
                 }
             }
         ]
     },

     plugins: [
        new HtmlWebPackPlugin({
            hash: true,
            filename: "index.html",  //target html
            template: "./src/index.html" //source html
        })
    ]

 }