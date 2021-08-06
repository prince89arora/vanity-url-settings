const path = require('path')

module.exports = {
    mode: 'production',
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path:path.resolve(__dirname, "../site-settings/src/main/resources/javascript/react"),
    },

    module: {
        rules: [
          {
            test: /\.?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env', '@babel/preset-react']
              }
            }
          },
        ]
      }
}