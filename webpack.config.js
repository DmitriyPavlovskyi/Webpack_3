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
            // If there stage-0 options in presets it means it's going to use all features from tc-39 from stage 0 to stage 3
            presets: ["env", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"},
          {loader: "sass-loader"}
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {loader: "url-loader"}
        ]
      }
    ]
  }
}
