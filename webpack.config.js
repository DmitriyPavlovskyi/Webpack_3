const path = require("path");

module.exports = {
  // looking for main JS file in source
  entry: "./src/index.js",
  // Specifying output file name and where to put it. Requires path import
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /(node_modules)/,
        // Specify which loader to use
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      }
    ]
  }
}
