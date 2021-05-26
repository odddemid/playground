import dotenv from "dotenv";
import webpack from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

dotenv.config();
const { NODE_ENV } = process.env;

console.log(path.resolve(__dirname));

export default {
  mode: NODE_ENV === "development" ? "development" : "production",
  entry: ["./client/index.tsx"],
  output: {
    path: path.resolve(__dirname, "../client"),
    filename: "main.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader", "ts-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/index.html",
      filename: "index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
