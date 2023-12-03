const path = require('path');

module.exports = {
  mode: "production",
  target: "node",
  entry: { app: "./src/index.ts" },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
};
