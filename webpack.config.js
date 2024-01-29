const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  entry: {
    main: "./src/main.js",
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 9000,
  },
};
