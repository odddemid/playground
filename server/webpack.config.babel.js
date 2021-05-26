import path from "path";
import nodeExternals from "webpack-node-externals";
import dotenv from "dotenv";

dotenv.config();
const { NODE_ENV } = process.env;

module.exports = {
  mode: NODE_ENV === "development" ? "development" : "production",
  entry: "./server/index.ts",
  output: {
    path: path.resolve(__dirname, "../build/server"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "ts-loader",
      },
    ],
  },
  target: "node",
  devtool: false,
  resolve: {
    extensions: [".ts", ".js"],
  },
  experiments: {
    topLevelAwait: true,
  },
  externals: [nodeExternals()],
};
