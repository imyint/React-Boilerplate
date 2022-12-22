const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

// module: for anything Webpack wants to invoke aside from bundling
// babel loader: don't need to setup babel anymore, webpack will automatically transpile before bundling
// mode: development/production mode (production will be minified)
// source-map: convert minified back to original
// html-plugin: include html file in bundling
// dev-server: live server is just an extension of VSCode, so dev server will provide a dev run-time environment for any editor

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "bundled"),
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
  //add webpack start script to be able to run devServer
  //bundles the file in memory so don't need bundled file to serve
  devServer: {
    compress: true, //compress bundled file?
    port: 9000, //port on which to serve server
  },
};
